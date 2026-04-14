import { __decorate } from "tslib";
/* eslint-disable import/no-duplicates */
import '@praval/prvl-sub-grid-component';
import { columnHeaderRenderer } from '@praval/prvl-sub-grid-component/lit.js';
import '@material/web/progress/circular-progress.js';
import { html, LitElement, nothing, render } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import './components/PrGridColumnFilter.js';
import './components/PrGridDownloadMenu.js';
import './components/PrGridRowFilter.js';
import './components/PrPagination.js';
import { PrGridViewStyles } from './grid-view-styles.js';
import { copy } from './pr-grid-copy.js';
export class PrGrid extends LitElement {
    constructor() {
        super(...arguments);
        this.defaultPageSize = 10;
        this.defaultPage = 1;
        this.originalSearchParams = undefined;
        this.columnReorderingAllowed = false;
        this.variantClass = '';
        this.hasSimplePagination = false;
        this.theme = 'no-border';
        this.columns = [];
        this.rows = [];
        this.defaultEmptyText = 'No data to display';
        this.sortedColumn = '';
        this.sortDirection = '';
        this.hideHeader = false;
        this.hideFilters = false;
        this.rowLimit = 0;
        this.page = this.defaultPage;
        this.pageSize = this.defaultPageSize;
        this.pageSizes = [5, 10, 25, 100];
        this.recordCount = 0;
        this.localStorageID = undefined;
        this.showDownload = true;
        this.isDownloading = false;
        this.isLoading = false;
        this.downloadMenuItems = [];
        this.addParamsToURL = true;
        this.readParamsFromURL = false;
        this.refreshDataOnColumnVisibilityChange = true;
        this.filterValueChangeDebounceTime = 300;
        this.hideColumnHeaders = false;
        this.preservedQueryParamKeys = [];
        this.filterMaxDate = new Date().toISOString().split("T")[0];
        this.hashedTableState = '';
        this.showAddButton = false;
        this.disableAddButton = false;
        this.showViewMore = false;
        this.addButtonLabel = copy.add;
        this.showRemoveAllButton = false;
        this.disableRemoveAllButton = false;
        this.removeAllButtonLabel = copy.removeAll;
        this.sessionStorageKey = undefined;
        this.useNewDatePicker = false;
        this.filters = [];
        this.isColumnsReordering = false;
        this.isExpanded = false;
        this.displayColumns = [];
        this.sessionStorageData = undefined;
        this.defaultFilterKeys = ['sort', 'order', 'page', 'size'];
        this.initialised = false;
        this.handlePopState = () => {
            this.updateSearchParamsFromUri(true);
            this.dispatchChangeEvent();
        };
        this.handleUnload = () => {
            sessionStorage.removeItem(`urlPageSizeRead`);
        };
        this.dispatchChangeEvent = () => {
            const filters = this.filters.reduce((columnFilters, { columnField, value }) => ({
                ...columnFilters,
                [columnField]: value,
            }), {});
            this.dispatchEvent(new CustomEvent('change', {
                detail: {
                    columnName: this.sortedColumn,
                    sortOrder: this.sortDirection,
                    page: this.page,
                    pageSize: this.pageSize,
                    filters,
                    filtersOperators: this.filters.map((f) => ({
                        columnField: f.columnField,
                        operator: f.operatorValue,
                    })),
                },
                bubbles: true,
                composed: true,
            }));
        };
        this.renderColumnHeader = (column, nextColumn, index, length) => {
            const headerClasses = classMap({
                header: true,
                frozen: !!column.frozenToEnd,
                first: index === 0,
                last: index === length - 1,
                border: !nextColumn?.frozenToEnd,
            });
            return html `
      <div
        @click=${() => column.sortable && this.handleSort(column.name)}
        @keyDown=${() => column.sortable && this.handleSort(column.name)}
        class=${headerClasses}
      >
        <span class="header-label">${column.header}</span>
        ${column.sortable
                ? html `<span class="header-sort-icon" title="Sort">
  ${this.sortDirection === 'desc' &&
                    this.sortedColumn === column.name
                    ? '▲'
                    : '▼'}
</span>`
                : nothing}
      </div>
    `;
        };
        this.columnRenderer = (column, root, columnElement, model) => {
            /*
              Due to a quirk of vaadin-grid, in order for the column cells to react to
              changes to bodyRenderer output, we must clear the contents of the cell
              before rendering the new content. Otherwise the new content will be
              appended to the existing content.
            */
            render(nothing, root);
            const templateResult = column.bodyRenderer(model.item, model, columnElement);
            let styledWrapper = templateResult;
            const shouldApplyMaxWidth = !!column.maxWidth;
            const maxWidthSetClass = 'column-max-width-set';
            if (shouldApplyMaxWidth) {
                styledWrapper = html `
        <div class="${maxWidthSetClass}" style="max-width: ${column.maxWidth}">
          ${templateResult}
        </div>
      `;
            }
            render(styledWrapper, root);
            if (shouldApplyMaxWidth) {
                requestAnimationFrame(() => {
                    const el = root.querySelector(`.${maxWidthSetClass}`);
                    if (el && el.scrollWidth > el.clientWidth) {
                        if (!el.querySelector('.custom-tooltip') && el.textContent?.trim()) {
                            const tooltip = document.createElement('div');
                            tooltip.className = 'custom-tooltip';
                            tooltip.style.cssText = `
              background-color: #092241;
              font-size: 0.75rem;
              color: white;
              text-align: left;
              padding: 0.313rem 0.5rem;
              border-radius: 0.188rem;
              max-height: 31.25rem;
              overflow: hidden;
              position: absolute;
              z-index: 1000;
              display: none;
            `;
                            tooltip.textContent = el.textContent;
                            el.addEventListener('mouseenter', () => {
                                tooltip.style.display = 'flex';
                                const rect = el.getBoundingClientRect();
                                tooltip.style.left = `${rect.left}px`;
                                tooltip.style.top = `${rect.bottom + window.scrollY + 4}px`;
                                document.body.appendChild(tooltip);
                            });
                            el.addEventListener('mouseleave', () => {
                                tooltip.remove();
                            });
                        }
                    }
                });
            }
        };
        this.renderHeader = () => html `
    <div class="grid-header">
      <slot name="header" style="text-align: center;"><div class="empty"></div></slot>
      ${this.hideFilters
            ? nothing
            : html `<div class="grid-menu">
            <slot name="filters"><div class="empty"></div></slot>
            <pr-grid-column-filter
              .columns=${this.arrangedColumns}
              columnsLocalStorageKey=${ifDefined(this.columnsLocalStorageKey)}
              @columnFilter=${(e) => this.handleOnColumnFilter(e)}
              @reorderColumns=${this.reorderColumnsFromFilter}
              .columnReorderingAllowed=${this.columnReorderingAllowed}
              .refreshDataOnColumnVisibilityChange=${this
                .refreshDataOnColumnVisibilityChange}
              .requestGridUpdate=${() => this.requestUpdate()}
            ></pr-grid-column-filter>
            ${this.showDownload
                ? html `<pr-grid-download-menu
                  .items=${this.downloadMenuItems}
                  .isDownloading=${this.isDownloading}
                ></pr-grid-download-menu>`
                : nothing}
            <pr-grid-row-filter
              .columns=${this.displayColumns}
              .filterValueChangeDebounceTime=${this
                .filterValueChangeDebounceTime}
              .readParamsFromURL=${this.readParamsFromURL}
              .maxDate=${this.filterMaxDate}
              .useNewDatePicker=${this.useNewDatePicker}
              @rowFilter=${(e) => {
                this.filters = e.detail.filters;
                if (e.detail.resetPage) {
                    this.page = this.defaultPage;
                }
                this.updatePage();
            }}
            ></pr-grid-row-filter>
          </div>`}
    </div>
    <div class="touch-edge">
      <slot name="under-header"></slot>
    </div>
  `;
        this.renderRowControls = () => {
            if (this.showAddButton === false &&
                this.showRemoveAllButton === false &&
                this.showViewMoreLessButton === false) {
                return nothing;
            }
            return html ` <div class="row-controls row-limit">
      ${this.renderAddNewButton()} ${this.renderViewMoreLessButton()}
      ${this.renderRemoveAllButton()}
    </div>`;
        };
        this.renderPaginationControls = () => {
            if (this.rowLimit > 0) {
                return nothing;
            }
            return html `
      <pr-pagination
        ?simple=${this.hasSimplePagination}
        class="pagination"
        .page=${this.page}
        .pageSize=${this.pageSize}
        .pageSizes=${this.pageSizes}
        .recordCount=${this.recordCount}
        @updatePagination=${(e) => {
                this.page = e.detail.page;
                this.pageSize = e.detail.pageSize;
                this.updateSessionStorage({
                    pageSize: this.pageSize,
                });
                this.updatePage();
            }}
      ></pr-pagination>
    `;
        };
    }
    get isPersistable() {
        if (this.localStorageID)
            return true;
        return false;
    }
    get columnNames() {
        return this.columns.map((column) => column.name);
    }
    get columnsLocalStorageKey() {
        if (this.hashedTableState === '') {
            const columnsWithoutFunctions = this.columns.map(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ({ bodyRenderer, hidden, ...rest }) => rest);
            const serializedColumns = JSON.stringify(columnsWithoutFunctions);
            let hash = 0;
            for (let i = 0; i < serializedColumns.length; i += 1) {
                // Update hash using prime number multiplier (31) for better distribution and ensure it doesn't exceed 32-bit integer
                // eslint-disable-next-line no-bitwise
                hash = (hash * 31 + serializedColumns.charCodeAt(i)) >>> 0;
            }
            // Convert the string to base36 for brevity
            this.hashedTableState = hash.toString(36);
        }
        return `pr-grid-${this.localStorageID}-${this.hashedTableState}-columns`;
    }
    get arrangedColumns() {
        let columnsToDisplay = [];
        columnsToDisplay = this.getColumnsToDisplayFromLocalStorage();
        if (columnsToDisplay.length === 0)
            columnsToDisplay = [...this.columns];
        return columnsToDisplay
            .filter(col => col)
            .map((column) => ({
            ...column,
            width: !column.width ? undefined : column.width,
        }));
    }
    connectedCallback() {
        super.connectedCallback?.();
        window.addEventListener('popstate', this.handlePopState);
        window.addEventListener('beforeunload', this.handleUnload);
    }
    disconnectedCallback() {
        window.removeEventListener('popstate', this.handlePopState);
        window.removeEventListener('beforeunload', this.handleUnload);
        super.disconnectedCallback?.();
    }
    updateSearchParamsFromUri(rebuildFiltersFromUri = false) {
        // If the grid is not visible, do not update from search params
        if (this.grid.getBoundingClientRect().width === 0)
            return;
        if (this.readParamsFromURL) {
            const url = new URL(window.location.href);
            const searchParams = new URLSearchParams(url.search);
            const [sortKey, orderKey, pageKey, sizeKey] = this.defaultFilterKeys;
            const sort = searchParams.get(sortKey);
            const order = searchParams.get(orderKey);
            const page = searchParams.get(pageKey);
            const size = searchParams.get(sizeKey);
            if (sort && order) {
                this.sortedColumn = sort;
                this.sortDirection = order;
            }
            if (page) {
                this.page = parseInt(page, 10) || this.defaultPage;
            }
            if (size) {
                // update pageSize with url param only on load or refresh
                // otherwise use session storage value
                if (!this.getSessionStorageData() ||
                    (!sessionStorage.getItem(`urlPageSizeRead`) &&
                        this.grid.getBoundingClientRect().width > 0)) {
                    sessionStorage.setItem(`urlPageSizeRead`, true.toString());
                    this.pageSize = parseInt(size, 10) || this.defaultPageSize;
                    this.updateSessionStorage({ pageSize: this.pageSize });
                }
            }
            if (rebuildFiltersFromUri) {
                this.rebuildFiltersFromUri(searchParams);
            }
        }
    }
    rebuildFiltersFromUri(searchParams) {
        const filters = [];
        for (const [key, value] of searchParams.entries()) {
            const isDefaultKey = this.defaultFilterKeys.includes(key);
            const [columnField, operatorValue] = key.split('_');
            if (!isDefaultKey && columnField && operatorValue) {
                filters.push({
                    columnField,
                    operatorValue,
                    value,
                });
            }
        }
        this.filters = filters;
    }
    update(changedProperties) {
        if (!this.initialised && this.columns.length > 0) {
            this.displayColumns = [...this.columns];
            this.checkLocalStorageUpdate();
            this.initialised = true;
        }
        if (changedProperties.has('sessionStorageData') &&
            this.sessionStorageData) {
            const newPageSize = this.sessionStorageData.pageSize || this.defaultPageSize;
            if (this.pageSize !== newPageSize) {
                this.pageSize = newPageSize;
            }
        }
        super.update(changedProperties);
    }
    firstUpdated() {
        this.updateSearchParamsFromUri();
        this.removeOldLocalStorageValues();
        this.sessionStorageData = this.getSessionStorageData();
    }
    getSessionStorageData() {
        if (this.sessionStorageKey) {
            const sessionData = sessionStorage.getItem(`grid-${this.sessionStorageKey}`);
            if (sessionData) {
                return JSON.parse(sessionData);
            }
        }
        return undefined;
    }
    updateSessionStorage(data) {
        const sessionData = this.getSessionStorageData() || {};
        if (this.sessionStorageKey && data) {
            const updatedData = {
                ...sessionData,
                ...data,
            };
            sessionStorage.setItem(`grid-${this.sessionStorageKey}`, JSON.stringify(updatedData));
            this.sessionStorageData = updatedData;
        }
    }
    checkLocalStorageUpdate() {
        if (this.isPersistable) {
            const preservedColumns = JSON.parse(localStorage.getItem(this.columnsLocalStorageKey) || '[]');
            if (preservedColumns.length > 0) {
                let updateStorage = false;
                // Scenarios where we should update appData with the latest display columns data
                if (preservedColumns.length !== this.columns.length)
                    updateStorage = true;
                const allColumnNamesFound = this.columns.every(column => preservedColumns.some((pc) => pc.name === column.name)) &&
                    preservedColumns.every((pc) => this.columns.some(column => column.name === pc.name));
                if (!allColumnNamesFound)
                    updateStorage = true;
                if (updateStorage) {
                    this.setColumnsToLocalStorage(this.columns);
                }
            }
        }
    }
    buildQueryFromFilters() {
        const params = new URLSearchParams();
        this.filters.forEach((f) => {
            params.append(`${f.columnField}_${f.operatorValue}`, f.value);
        });
        return Object.fromEntries(params);
    }
    rebuildQueryFromMatchingQuerystringParams() {
        const params = new URLSearchParams();
        if (this.preservedQueryParamKeys.length === 0)
            return {};
        const url = new URL(window.location.href);
        const originalSearchParams = new URLSearchParams(url.search);
        originalSearchParams.forEach((value, key) => {
            if (this.preservedQueryParamKeys.includes(key)) {
                params.append(key, value);
            }
        });
        return Object.fromEntries(params);
    }
    getColumnsToDisplayFromLocalStorage() {
        let columnsToDisplay = [];
        if (this.isPersistable) {
            const preservedColumns = JSON.parse(localStorage.getItem(this.columnsLocalStorageKey) || '[]');
            if (preservedColumns.length > 0) {
                columnsToDisplay =
                    this.mapColumnsWithPersistedSettings(preservedColumns);
            }
        }
        return columnsToDisplay;
    }
    mapColumnsWithPersistedSettings(preservedColumns) {
        const preservedMap = new Map(preservedColumns.map(col => [col.name, col]));
        const mappedColumns = this.columns.map(configuredColumn => {
            const preservedColumn = preservedMap.get(configuredColumn.name);
            if (!preservedColumn) {
                return { ...configuredColumn };
            }
            return {
                ...configuredColumn,
                hidden: preservedColumn.hidden,
                frozenToEnd: preservedColumn.frozenToEnd,
                width: preservedColumn.width || undefined,
            };
        });
        mappedColumns.sort((a, b) => {
            const indexA = preservedColumns.findIndex(col => col.name === a.name);
            const indexB = preservedColumns.findIndex(col => col.name === b.name);
            if (indexA === -1 && indexB === -1)
                return 0;
            if (indexA === -1)
                return 1;
            if (indexB === -1)
                return -1;
            return indexA - indexB;
        });
        return mappedColumns;
    }
    removeOldLocalStorageValues() {
        const oldKeys = this.findMatchingLocalStorageKeys(`pr-grid-${this.localStorageID}-`, '-columns', this.hashedTableState);
        for (let i = 0; i <= oldKeys.length; i += 1) {
            localStorage.removeItem(oldKeys[i]);
        }
    }
    findMatchingLocalStorageKeys(prefix, suffix, currentTableStateHash) {
        const matchingKeys = [];
        const currentKey = prefix + currentTableStateHash + suffix;
        for (let i = 0; i < localStorage.length; i += 1) {
            const key = localStorage.key(i);
            if (key &&
                key.startsWith(prefix) &&
                key.endsWith(suffix) &&
                key !== currentKey) {
                matchingKeys.push(key);
            }
        }
        return matchingKeys;
    }
    async updatePage(refreshUrlParams = true) {
        this.dispatchChangeEvent();
        if (this.addParamsToURL && refreshUrlParams) {
            const urlParams = {
                sort: this.sortedColumn,
                order: this.sortDirection,
                page: this.page.toString(),
                size: this.pageSize.toString(),
                ...this.buildQueryFromFilters(),
                ...this.rebuildQueryFromMatchingQuerystringParams(),
            };
            const url = new URL(window.location.href);
            const gridSearchParams = new URLSearchParams(urlParams);
            if (!this.originalSearchParams) {
                this.saveOriginalSearchParams(gridSearchParams);
            }
            const combinedParams = new URLSearchParams([
                ...(this.originalSearchParams ?? []),
                ...gridSearchParams,
            ]);
            url.search = combinedParams.toString();
            window.history.pushState(null, '', url.toString());
        }
    }
    saveOriginalSearchParams(gridSearchParams) {
        const url = new URL(window.location.href);
        const originalSearchParams = new URLSearchParams(url.search);
        this.filters.forEach((f) => {
            originalSearchParams.delete(`${f.columnField}_${f.operatorValue}`);
        });
        gridSearchParams.forEach((value, key) => {
            originalSearchParams.delete(key);
        });
        this.originalSearchParams = originalSearchParams;
    }
    handleSort(column = '') {
        if (this.sortedColumn !== column) {
            this.sortDirection = 'asc';
        }
        else {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }
        this.sortedColumn = column;
        this.updatePage();
    }
    setColumnsToLocalStorage(columns) {
        if (this.isPersistable) {
            localStorage.setItem(this.columnsLocalStorageKey, JSON.stringify(columns));
        }
    }
    async reorderColumnsFromTable() {
        const columns = [...this.arrangedColumns];
        const visibleColumns = columns.filter((column) => column.hidden !== true);
        const hiddenColumns = columns.filter((column) => column.hidden === true);
        const frozenColumns = columns.filter((column) => column.frozenToEnd === true);
        const allColumns = [
            ...visibleColumns.filter(column => column?.frozenToEnd !== true),
            ...hiddenColumns.filter(column => column?.frozenToEnd !== true),
            ...frozenColumns,
        ];
        // calulate column order from table header flex order
        const headerNodes = Array.from(this.grid?.shadowRoot?.querySelectorAll('th') || []);
        if (headerNodes.length) {
            const columnOrder = headerNodes
                .map((el, id) => ({ id, flexPosition: Number(el.style.order) }))
                .sort((a, b) => a.flexPosition - b.flexPosition)
                .map(el => el.id);
            const columnsCorrectlyOrdered = columnOrder.every((x, i) => i === 0 || x > columnOrder[i - 1]);
            let reorderedColumns = [];
            if (!columnsCorrectlyOrdered) {
                reorderedColumns = columnOrder.map(id => allColumns[id]);
                this.displayColumns = [
                    ...reorderedColumns.filter(column => column.hidden !== true && column?.frozenToEnd !== true),
                    ...hiddenColumns.filter(column => column?.frozenToEnd !== true),
                    ...frozenColumns,
                ];
                this.isColumnsReordering = true;
                await this.updateComplete;
                this.isColumnsReordering = false;
                this.setColumnsToLocalStorage(this.displayColumns);
            }
        }
    }
    async reorderColumnsFromFilter(e) {
        this.displayColumns = [...e.detail.reorderedColumns];
        this.setColumnsToLocalStorage([...this.displayColumns]);
        this.isColumnsReordering = true;
        await this.updateComplete;
        this.isColumnsReordering = false;
    }
    handleOnColumnFilter(e) {
        e.detail.columns.forEach((column, id) => {
            if (!this.displayColumns[id])
                return;
            this.displayColumns[id].hidden = column?.hidden;
        });
        this.displayColumns = [...this.displayColumns];
        this.updatePage(false);
    }
    cellPartNameGenerator(_column, model) {
        let parts = '';
        if (model.item.disabled) {
            parts += ' ix-disabled-cell';
        }
        return parts;
    }
    renderAddNewButton() {
        if (!this.showAddButton)
            return nothing;
        return html `<button
  name="add-new-button"
  class="footer-button"
  ?disabled=${this.disableAddButton}
  @click=${() => this.onAddButtonClick()}
>
  + ${this.addButtonLabel}
</button>`;
    }
    renderViewMore() {
        if (!this.showViewMore)
            return nothing;
        return html ` <div class="view-more">
      <slot name="viewMore"></slot>
    </div>`;
    }
    get showViewMoreLessButton() {
        return (!this.showViewMore &&
            this.rowLimit > 0 &&
            this.rows.length > this.rowLimit);
    }
    renderViewMoreLessButton() {
        if (!this.showViewMoreLessButton)
            return nothing;
        return html `
      <button
  class="footer-button"
  @click=${() => {
            this.isExpanded = !this.isExpanded;
        }}
>
  ${this.isExpanded ? copy.viewLess : copy.viewMore}
</button>
    `;
    }
    renderRemoveAllButton() {
        if (!this.showRemoveAllButton)
            return nothing;
        return html `<button
  class="footer-button remove-all-button"
  name="remove-all-button"
  ?disabled=${this.disableRemoveAllButton}
  @click=${() => this.onRemoveAllButtonClick()}
>
  ${this.removeAllButtonLabel}
</button>`;
    }
    renderColumns() {
        const arrangedColumnsInstance = [...this.arrangedColumns];
        if (arrangedColumnsInstance.length > 0) {
            return html `${arrangedColumnsInstance.map((column, id) => {
                if (column.hidden === true)
                    return nothing;
                return html `<vaadin-grid-column
            ${columnHeaderRenderer(() => this.renderColumnHeader(column, arrangedColumnsInstance[id + 1], id, arrangedColumnsInstance.length), this.sortDirection)}
            .renderer=${(root, columnElement, model) => this.columnRenderer(column, root, columnElement, model)}
            resizable
            width=${ifDefined(column.width)}
            min-width=${ifDefined(column.minWidth)}
            .responsive=${column.responsive}
            ?hidden=${column.hidden}
            ?frozen-to-end=${column.frozenToEnd}
            path=${column.name}
            ?auto-width=${column.autoWidth}
            flex-grow=${ifDefined(column.flexGrow)}
          ></vaadin-grid-column>`;
            })}`;
        }
        return html `<vaadin-grid-column></vaadin-grid-column>`;
    }
    renderLoading() {
        return html ` <div
      class="progress-container"
      style="display: ${this.isLoading ? '' : 'none'}"
    >
       <md-circular-progress indeterminate></md-circular-progress>
    </div>`;
    }
    renderGrid() {
        if (this.isColumnsReordering) {
            return nothing;
        }
        const columnDisplayed = this.displayColumns.find((column) => column.hidden !== true);
        const displayRows = this.rowLimit > 0 && !this.isExpanded
            ? this.rows.slice(0, this.rowLimit)
            : this.rows;
        return html `<vaadin-grid
      class=${this.hideColumnHeaders ? 'hide-column-headers' : ''}
      .items=${columnDisplayed ? displayRows : []}
      all-rows-visible
      theme=${this.theme}
      .cellPartNameGenerator=${this.cellPartNameGenerator}
      @mouseup=${this.reorderColumnsFromTable}
    >
      ${this.renderColumns()}
      <div slot="empty-state"><slot name="no-rows"></slot></div>
    </vaadin-grid>`;
    }
    render() {
        return html `
      <div
        class=${`grid-container ${this.isColumnsReordering ? 'columns-reordering' : ''} ${this.variantClass}`}
      >
        ${this.hideHeader ? nothing : this.renderHeader()}
        ${this.renderLoading()} ${this.renderGrid()} ${this.renderRowControls()}
        <div class="row-controls more-pagination">
          ${this.renderViewMore()} ${this.renderPaginationControls()}
        </div>
        <slot name="footer"></slot>
      </div>
    `;
    }
}
PrGrid.styles = [PrGridViewStyles];
__decorate([
    query('vaadin-grid')
], PrGrid.prototype, "grid", void 0);
__decorate([
    property({ type: Boolean, attribute: 'column-reordering-allowed' })
], PrGrid.prototype, "columnReorderingAllowed", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "variantClass", void 0);
__decorate([
    property({ type: Boolean, attribute: 'simple-pagination' })
], PrGrid.prototype, "hasSimplePagination", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "theme", void 0);
__decorate([
    property({ type: Array })
], PrGrid.prototype, "columns", void 0);
__decorate([
    property({ type: Array })
], PrGrid.prototype, "rows", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "defaultEmptyText", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "sortedColumn", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "sortDirection", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "hideHeader", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-filters' })
], PrGrid.prototype, "hideFilters", void 0);
__decorate([
    property({ type: Number })
], PrGrid.prototype, "rowLimit", void 0);
__decorate([
    property({ type: Number })
], PrGrid.prototype, "page", void 0);
__decorate([
    property({ type: Number })
], PrGrid.prototype, "pageSize", void 0);
__decorate([
    property({ type: Array })
], PrGrid.prototype, "pageSizes", void 0);
__decorate([
    property({ type: Number })
], PrGrid.prototype, "recordCount", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "localStorageID", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "showDownload", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "isDownloading", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "isLoading", void 0);
__decorate([
    property({ type: Array })
], PrGrid.prototype, "downloadMenuItems", void 0);
__decorate([
    property({ type: Boolean, attribute: 'add-params-to-url' })
], PrGrid.prototype, "addParamsToURL", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "readParamsFromURL", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "refreshDataOnColumnVisibilityChange", void 0);
__decorate([
    property({ type: Number })
], PrGrid.prototype, "filterValueChangeDebounceTime", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "hideColumnHeaders", void 0);
__decorate([
    property({ type: Array })
], PrGrid.prototype, "preservedQueryParamKeys", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "filterMaxDate", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "hashedTableState", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "showAddButton", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "disableAddButton", void 0);
__decorate([
    property({ type: Boolean, attribute: 'show-view-more' })
], PrGrid.prototype, "showViewMore", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "addButtonLabel", void 0);
__decorate([
    property({ type: Function })
], PrGrid.prototype, "onAddButtonClick", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "showRemoveAllButton", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "disableRemoveAllButton", void 0);
__decorate([
    property({ type: String })
], PrGrid.prototype, "removeAllButtonLabel", void 0);
__decorate([
    property({ type: Function })
], PrGrid.prototype, "onRemoveAllButtonClick", void 0);
__decorate([
    property({ type: String, attribute: 'session-storage-key' })
], PrGrid.prototype, "sessionStorageKey", void 0);
__decorate([
    property({ type: Boolean })
], PrGrid.prototype, "useNewDatePicker", void 0);
__decorate([
    state()
], PrGrid.prototype, "filters", void 0);
__decorate([
    state()
], PrGrid.prototype, "isColumnsReordering", void 0);
__decorate([
    state()
], PrGrid.prototype, "isExpanded", void 0);
__decorate([
    state()
], PrGrid.prototype, "displayColumns", void 0);
__decorate([
    state()
], PrGrid.prototype, "sessionStorageData", void 0);
