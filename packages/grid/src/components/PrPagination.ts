import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PrGridViewStyles } from "../grid-view-styles.js";
import { PaginationStyles } from "./pagination-styles.js";
import { copy } from "../pr-grid-copy.js";

@customElement("pr-pagination")
export class PrPagination extends LitElement {
  static readonly styles = [PrGridViewStyles, PaginationStyles];

  @property({ type: Number }) recordCount = 0;
  @property({ type: Number }) page = 1;
  @property({ type: Number }) pageSize = 10;
  @property({ type: Array }) pageSizes: number[] = [5, 10, 25, 100];
  @property({ type: Boolean, attribute: "simple" }) isSimple = false;

  private changePage(offset: number) {
    this.page += offset;
    this.updatePagination();
  }

  private handlePageSizeSelection(e: Event) {
    const el = e.target as HTMLSelectElement;
    const newPageSize = Number(el.value);

    const currentFirstRecord = (this.page - 1) * this.pageSize + 1;
    const newPageNum = Math.ceil(currentFirstRecord / newPageSize);

    this.updatePagination(newPageNum, newPageSize);
  }

  updatePagination(page = this.page, pageSize = this.pageSize) {
    this.dispatchEvent(
      new CustomEvent("updatePagination", {
        detail: {
          page,
          pageSize,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const back = this.page > 1;
    const next = this.recordCount > this.page * this.pageSize;

    return html` <div class="pagination ${this.isSimple ? "simple" : ""}">
      <div ?hidden=${this.isSimple}>
        <p class="rows-per-page" data-testid="pr-pagination-rows-per-page">${copy.rowsPerPage}:</p>

        <select
          .value=${String(this.pageSize)}
          class="pagination__select-input"
          @change=${(e: Event) => this.handlePageSizeSelection(e)}
          selected-index=${this.pageSizes.indexOf(this.pageSize)}

        >
          ${this.pageSizes.map(
            (option) => html`
              <option
                class="select-option"
                value=${option}
                ?selected=${option === this.pageSize}
              >
                ${option}
              </option>
            `,
          )}
        </select>
      </div>

      <div>
        <p data-testid="pr-pagination-page-of-page">
          ${this.recordCount > 0 ? (this.page - 1) * this.pageSize + 1 : 0} -
          ${this.page * this.pageSize > this.recordCount
            ? html`${this.recordCount}`
            : html`${this.page * this.pageSize}`}
          of ${this.recordCount > 0 ? this.recordCount : 0}
        </p>

        <div class="pagination-nav">
          <button
            type="button"
            ?disabled=${!back}
            @click=${() => back && this.changePage(-1)}
            aria-label="Previous page"
            data-testid="pr-pagination-prev"
          >
            ◀
          </button>
          <button
            type="button"
            ?disabled=${!next}
            @click=${() => next && this.changePage(+1)}
            aria-label="Next page"
            data-testid="pr-pagination-next"
          >
            ▶
          </button>
        </div>
      </div>
    </div>`;
  }
}
