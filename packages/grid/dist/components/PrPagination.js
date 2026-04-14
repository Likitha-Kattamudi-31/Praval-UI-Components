import { __decorate } from "tslib";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { PrGridViewStyles } from "../grid-view-styles.js";
import { PaginationStyles } from "./pagination-styles.js";
import { copy } from "../pr-grid-copy.js";
let PrPagination = class PrPagination extends LitElement {
    constructor() {
        super(...arguments);
        this.recordCount = 0;
        this.page = 1;
        this.pageSize = 10;
        this.pageSizes = [5, 10, 25, 100];
        this.isSimple = false;
    }
    changePage(offset) {
        this.page += offset;
        this.updatePagination();
    }
    handlePageSizeSelection(e) {
        const el = e.target;
        const newPageSize = Number(el.value);
        const currentFirstRecord = (this.page - 1) * this.pageSize + 1;
        const newPageNum = Math.ceil(currentFirstRecord / newPageSize);
        this.updatePagination(newPageNum, newPageSize);
    }
    updatePagination(page = this.page, pageSize = this.pageSize) {
        this.dispatchEvent(new CustomEvent("updatePagination", {
            detail: {
                page,
                pageSize,
            },
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        const back = this.page > 1;
        const next = this.recordCount > this.page * this.pageSize;
        return html ` <div class="pagination ${this.isSimple ? "simple" : ""}">
      <div ?hidden=${this.isSimple}>
        <p class="rows-per-page" data-testid="pr-pagination-rows-per-page">${copy.rowsPerPage}:</p>

        <select
          .value=${String(this.pageSize)}
          class="pagination__select-input"
          @change=${(e) => this.handlePageSizeSelection(e)}
          selected-index=${this.pageSizes.indexOf(this.pageSize)}

        >
          ${this.pageSizes.map((option) => html `
              <option
                class="select-option"
                value=${option}
                ?selected=${option === this.pageSize}
              >
                ${option}
              </option>
            `)}
        </select>
      </div>

      <div>
        <p data-testid="pr-pagination-page-of-page">
          ${this.recordCount > 0 ? (this.page - 1) * this.pageSize + 1 : 0} -
          ${this.page * this.pageSize > this.recordCount
            ? html `${this.recordCount}`
            : html `${this.page * this.pageSize}`}
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
};
PrPagination.styles = [PrGridViewStyles, PaginationStyles];
__decorate([
    property({ type: Number })
], PrPagination.prototype, "recordCount", void 0);
__decorate([
    property({ type: Number })
], PrPagination.prototype, "page", void 0);
__decorate([
    property({ type: Number })
], PrPagination.prototype, "pageSize", void 0);
__decorate([
    property({ type: Array })
], PrPagination.prototype, "pageSizes", void 0);
__decorate([
    property({ type: Boolean, attribute: "simple" })
], PrPagination.prototype, "isSimple", void 0);
PrPagination = __decorate([
    customElement("pr-pagination")
], PrPagination);
export { PrPagination };
