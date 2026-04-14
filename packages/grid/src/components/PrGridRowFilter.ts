import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import type { Column, DataType, FilterOperator } from "../PrGrid.js";
import { PrGridViewStyles } from "../grid-view-styles.js";
import { copy } from "../pr-grid-copy.js";
import { PrGridRowFilterStyles } from "./grid-row-filter-styles.js";

export interface Filter {
  columnField: string;
  operatorValue: string;
  dataType?: DataType;
  value: string;
}

@customElement("pr-grid-row-filter")
export class PrGridRowFilter extends LitElement {
  static readonly styles = [PrGridViewStyles, PrGridRowFilterStyles];

  @property({ type: Array }) columns: Column[] = [];
  @property({ type: Number }) filterValueChangeDebounceTime = 300;
  @property({ type: Boolean }) readParamsFromURL = false;

  @property({ type: String }) maxDate = new Date().toISOString().split("T")[0];

  @state() private isDropdownVisible = false;
  @state() private filters: Filter[] = [];
  @state() private filterableColumns: Column[] = [];
  @state() private filterColumns: string[] = [];
  @state() private mapSelect: boolean = false;
  @state() private activeFilters: Filter[] = [];
  @state() private oldValueLength = 0;

  private debounceEvent?: ReturnType<typeof setTimeout>;

  private debouncedOnFilterValueChange = (
    index: number,
    target: EventTarget,
  ) => {
    clearTimeout(this.debounceEvent);
    this.debounceEvent = setTimeout(
      () => this.onfilterValueChange(index, target),
      this.filterValueChangeDebounceTime,
    );
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.closeOnOuterClick);
    window.addEventListener("popstate", this.handlePopState);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.closeOnOuterClick);
    window.removeEventListener("popstate", this.handlePopState);
  }

  firstUpdated() {
    this.filterableColumns = this.columns.filter((c) => c.filterable);
    this.filterColumns = this.filterableColumns.map((c) => c.name);

    if (this.readParamsFromURL) {
      this.filters = this.parseFilterQueryString();
    }

    if (!this.filters.length) {
      this.addFilter();
    }

    this.updateActiveFilters();
    this.dispatchUpdate(false);
  }

  updateActiveFilters() {
    this.activeFilters = this.filters.filter((f) => f.value.length > 0);
  }

  get filterNames() {
    return this.filters.map((f) => f.columnField);
  }

  get unselectedFilters() {
    return this.filterColumns.filter((f) => !this.filterNames.includes(f));
  }

  closeOnOuterClick = (e: Event) => {
    if (!e.composedPath().includes(this)) {
      this.isDropdownVisible = false;
    }
  };

  parseFilterQueryString(): Filter[] {
    const params = new URLSearchParams(window.location.search);
    const filters: Filter[] = [];

    this.filterableColumns.forEach((fc) => {
      fc.filterOperators?.forEach((operator) => {
        const key = `${fc.name}_${operator}`;

        if (params.has(key)) {
          filters.push({
            columnField: fc.name,
            operatorValue: operator,
            dataType: fc.dataType,
            value: params.get(key) ?? "",
          });
        }
      });
    });

    return filters;
  }

  dispatchUpdate(resetPage = true) {
    this.dispatchEvent(
      new CustomEvent("rowFilter", {
        detail: {
          filters: this.filters.filter((f) => f.value.length),
          resetPage,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  addFilter() {
    const nextFilter =
      this.filterColumns.find((f) => !this.filterNames.includes(f)) || "";

    const column = this.filterableColumns.find((c) => c.name === nextFilter);

    this.filters = [
      ...this.filters,
      {
        columnField: nextFilter,
        operatorValue: column?.filterOperators?.[0] || "contains",
        dataType: column?.dataType || "string",
        value: "",
      },
    ];

    this.updateActiveFilters();
  }

  clearFilters() {
    this.filters = [];
    this.addFilter();
    this.dispatchUpdate();
  }

  removeFilter(index: number) {
    this.filters = this.filters.filter((_, i) => i !== index);

    this.dispatchUpdate();

    if (!this.filters.length) {
      this.isDropdownVisible = false;
      this.addFilter();
    }

    this.updateActiveFilters();
  }

  private handlePopState = () => {
    this.filters = this.parseFilterQueryString();

    if (!this.filters.length) {
      this.isDropdownVisible = false;
      this.addFilter();
    }

    this.updateActiveFilters();
  };

  private onfilterColumnChange(index: number, e: Event) {
    const value = (e.target as HTMLSelectElement).value;

    const column = this.filterableColumns.find((c) => c.name === value);

    this.filters[index].columnField = value;
    this.filters[index].dataType = column?.dataType;
    this.filters[index].operatorValue =
      column?.filterOperators?.[0] || "contains";

    this.filters = [...this.filters];

    this.dispatchUpdate();
  }

  private onfilterOperatorChange(index: number, e: Event) {
    const value = (e.target as HTMLSelectElement).value;

    this.filters[index].operatorValue = value;

    this.filters = [...this.filters];

    this.dispatchUpdate();
  }

  private onDatefilterValueChange(index: number, value: string) {
    console.log("inside datefiltervaluechange");
    this.filters[index].value = value;

    this.dispatchUpdate();
    this.updateActiveFilters();
  }

  private onfilterValueChange(index: number, target: EventTarget) {
    const { value } = target as HTMLInputElement;

    this.filters[index].value = value;

    const newLength = value.length;

    if (
      this.filters[index].columnField.length > 0 &&
      (newLength >= 3 || newLength < this.oldValueLength)
    ) {
      this.dispatchUpdate();
    }

    this.updateActiveFilters();

    this.oldValueLength = newLength;
  }

  private renderDateInput(value: any, index: number) {
    return html`
      <input
        type="date"
        data-testid=${`filterValueInput-${index}`}
        .value=${value.value ?? ""}
        max=${this.maxDate ?? ""}
        name="${value.columnField}-valueDate"
        @change=${(e: any) => this.onDatefilterValueChange(index, e)}
        @input=${(e: any) => this.onDatefilterValueChange(index, e)}
      />
    `;
  }

  renderStringInput(value: any, index: number) {
    return html`<label class="form-group-operator-label">
      <span>Value</span>
      <input
        data-testid=${`filterValueInput-${index}`}
        placeholder="Filter value"
        @input=${(e: Event) =>
          this.debouncedOnFilterValueChange(index, e.target!)}
        .value=${value.value}
      />
    </label>`;
  }
  private renderFilterInputControl(value: any, index: number) {
    switch (value.dataType) {
      case "string":
      case undefined:
        return this.renderStringInput(value, index);
      case "dateTime":
        return this.renderDateInput(value, index);
      default:
        return nothing;
    }
  }

  renderFilterInput(value: Filter, index: number) {
    const options = [value.columnField, ...this.unselectedFilters];
    const filterOptions = this.filterableColumns.filter((column) =>
      options.includes(column.name),
    );
    return html`
      <div class="filter-form">
        <div class="filter-remove filter-form-column">
          <div class="form-group">
            <button
              type="button"
              data-testid="clearFilterButton"
              @click=${() => this.removeFilter(index)}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === " " || e.key === "Enter") {
                  this.removeFilter(index);
                }
              }}
              aria-label="Clear filter"
              style="background: none; border: none; cursor: pointer; margin-bottom: 10px;"
            >
              ✕
            </button>
          </div>
        </div>
        ${this.mapSelect
          ? html`<div
              class="filter-form-column filter-form-column-border filterColumnField"
            >
              <div class="form-group">
                <label
                  class="form-group-column-label"
                  title="select: ${value.columnField}, options: ${filterOptions.map(
                    (column) => `value=${column.name}, selected=${
                      column.name === value.columnField
                    }, ${column.header}
                `,
                  )}"
                  >Columns</label
                >

                <select
                  @change=${(e: Event) => this.onfilterColumnChange(index, e)}
                  .value=${value.columnField}
                  data-v=${value.columnField}
                >
                  ${filterOptions.map(
                    (column) => html`
                      <option
                        value=${column.name}
                        ?selected=${column.name === value.columnField}
                      >
                        ${column.header}
                      </option>
                    `,
                  )}
                </select>
              </div>
            </div>`
          : nothing}

        <div
          class="filter-form-column filter-form-column-border filterColumnField"
        >
          <div class="filter-form-group">
            <label class="form-group-column-label"
              ><span>Columns</span>
              <select
                data-testid=${`filterColumnInput-${index}`}
                @change=${(e: Event) => this.onfilterColumnChange(index, e)}
                .value=${value.columnField}
                data-v=${value.columnField}
              >
                ${repeat(
                  filterOptions,
                  (column: Column) => column.name,
                  (column: Column) => html`
                    <option
                      value=${column.name}
                      ?selected=${column.name === value.columnField}
                    >
                      ${column.header}
                    </option>
                  `,
                )}
              </select>
            </label>
          </div>
        </div>

        <div
          class="filter-form-column filter-form-column-border filterOperatorField"
        >
          <div class="filter-form-group">
            <label class="form-group-operator-label"
              ><span>Operator</span>
              <select
                data-testid=${`filterOperatorInput-${index}`}
                class="filterOperatorInput"
                @change=${(e: Event) => this.onfilterOperatorChange(index, e)}
                .value=${value.operatorValue}
                data-v=${value.operatorValue}
              >
                ${repeat(
                  filterOptions.find(
                    (column) => column.name === value.columnField,
                  )?.filterOperators ?? ["contains"],
                  (filter: FilterOperator) => html`
                    <option
                      value=${filter}
                      ?selected=${filter === value.operatorValue}
                    >
                      ${filter}
                    </option>
                  `,
                )}
              </select>
            </label>
          </div>
        </div>
        <div
          class="filter-form-column filter-form-column-border filterValueField"
        >
          <div class="filter-form-group">
            ${this.renderFilterInputControl(value, index)}
          </div>
        </div>
      </div>
    `;
  }

  renderDropdown() {
    const disableAddButton =
      this.filters.length >= this.filterColumns.length ||
      this.activeFilters.length < this.filters.length;

    return html`
      <div class="filter-dropdown-content">
        <div class="filter-body">
          ${this.filters.map((f, i) => this.renderFilterInput(f, i))}
        </div>

        <div class="filter-footer">
          <button
            data-testid="addFilterButton"
            class="add-filter-button"
            @click=${() => this.addFilter()}
            ?disabled=${disableAddButton}
          >
            + Add filter
          </button>

          <button
            class="add-filter-button"
            data-testid="clearAllFiltersButton"
            @click=${() => this.clearFilters()}
            ?disabled=${this.activeFilters.length === 0}
          >
            Clear all
          </button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="grid-menu">
        <div class="filter-container tooltip-container">
          ${this.activeFilters.length > 0
            ? html`<span class="filter-superscript">
                ${this.activeFilters.length}
              </span>`
            : nothing}
          <button
            data-testid="showFiltersButton"
            class="filter_list filter-button"
            @click=${() => (this.isDropdownVisible = !this.isDropdownVisible)}
            @keyDown=${() => {
              this.isDropdownVisible = !this.isDropdownVisible;
            }}
          >
            <span class="filter">${copy.filters}</span>
          </button>
          ${this.isDropdownVisible ? this.renderDropdown() : nothing}
        </div>
      </div>
    `;
  }
}
