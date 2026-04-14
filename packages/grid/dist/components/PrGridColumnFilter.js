import { __decorate } from "tslib";
import { LitElement, html, nothing, svg } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import '@material/web/switch/switch.js';
import { PrGridViewStyles } from '../grid-view-styles.js';
import { PrGridColumnFilterStyles } from './grid-column-filter-styles.js';
const triggerKeys = [' ', 'Enter'];
const handleIcon = svg `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM7 12C7 10.9 7.9 10 9 10C10.1 10 11 10.9 11 12C11 13.1 10.1 14 9 14C7.9 14 7 13.1 7 12ZM9 20C10.1 20 11 19.1 11 18C11 16.9 10.1 16 9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20ZM17 6C17 7.1 16.1 8 15 8C13.9 8 13 7.1 13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM13 18C13 16.9 13.9 16 15 16C16.1 16 17 16.9 17 18C17 19.1 16.1 20 15 20C13.9 20 13 19.1 13 18Z" fill="#e08114" />
</svg>`;
let PrGridColumnFilter = class PrGridColumnFilter extends LitElement {
    constructor() {
        super(...arguments);
        this.columns = [];
        this.columnsLocalStorageKey = undefined;
        this.columnReorderingAllowed = false;
        this.refreshDataOnColumnVisibilityChange = true;
        this.isDropdownVisible = false;
        this.disabledColumns = [];
        this.dragEvent = {
            sourceEl: null,
            startId: -1,
            targetId: -1,
        };
        this.outerInteraction = (e) => {
            if (!e.composedPath().includes(this)) {
                this.isDropdownVisible = false;
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this.outerInteraction);
        this.initializeLocalStorage();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.outerInteraction);
    }
    get preservedColumns() {
        let preservedColumns = [];
        if (this.columnsLocalStorageKey) {
            preservedColumns = JSON.parse(localStorage.getItem(this.columnsLocalStorageKey) || '[]');
        }
        return preservedColumns;
    }
    initializeLocalStorage() {
        if (this.preservedColumns.length > 0) {
            this.disabledColumns = this.preservedColumns
                .filter(c => c.hidden && this.columns.some(col => col.name === c.name))
                .map(c => c.name);
            this.columns.forEach((column, id) => {
                if (this.disabledColumns.includes(column.name)) {
                    this.columns[id].hidden = true;
                }
            });
        }
        this.dispatchUpdate();
    }
    update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('columnsLocalStorageKey')) {
            this.initializeLocalStorage();
        }
    }
    toggleColumn(id) {
        this.columns[id].hidden = !this.columns[id].hidden;
        this.disabledColumns = this.columns
            .filter((column) => column.hidden)
            .map((column) => column.name);
        if (this.columnsLocalStorageKey) {
            localStorage.setItem(this.columnsLocalStorageKey, JSON.stringify([...this.columns]));
        }
        this.dispatchUpdate();
    }
    updateColumn(e, id) {
        const input = e.target;
        const el = input.shadowRoot?.querySelector('input');
        if (this.columns[id].hidden !== !el?.checked) {
            this.dispatchEvent(new CustomEvent('columnVisibilityChange', {
                detail: {
                    column: this.columns[id],
                },
                bubbles: true,
                composed: true,
            }));
        }
        this.columns[id].hidden = !el?.checked;
        this.disabledColumns = this.columns
            .filter((column) => column.hidden)
            .map((column) => column.name);
        if (this.columnsLocalStorageKey) {
            localStorage.setItem(this.columnsLocalStorageKey, JSON.stringify([...this.columns]));
        }
        this.dispatchUpdate();
    }
    dispatchUpdate(columns = this.columns) {
        this.dispatchEvent(new CustomEvent('columnFilter', {
            detail: {
                columns,
            },
            bubbles: true,
            composed: true,
        }));
    }
    dragstart(e) {
        if (this.columnReorderingAllowed) {
            const el = e.target;
            this.dragEvent.sourceEl = el;
            el.style.opacity = '0.3';
            const id = Number(el.getAttribute('data-id'));
            this.dragEvent.startId = id;
        }
    }
    dragend() {
        if (this.columnReorderingAllowed) {
            if (this.dragEvent.startId !== this.dragEvent.targetId) {
                const reorderedColumns = [...this.columns];
                const el = reorderedColumns.splice(this.dragEvent.startId, 1)[0];
                reorderedColumns.splice(this.dragEvent.targetId, 0, el);
                this.dispatchEvent(new CustomEvent('reorderColumns', {
                    detail: {
                        reorderedColumns,
                    },
                    bubbles: true,
                    composed: true,
                }));
            }
            this.dragEvent.sourceEl?.style.removeProperty('opacity');
            this.dragEvent = {
                sourceEl: null,
                startId: -1,
                targetId: -1,
            };
        }
    }
    dragenter(e) {
        if (this.columnReorderingAllowed) {
            const el = e.target;
            if (el.classList.contains('drag-target')) {
                const target = Number(el.getAttribute('data-id'));
                this.dragEvent.targetId = target;
            }
        }
    }
    handleDropdownToggle(e) {
        if (e instanceof KeyboardEvent && !triggerKeys.includes(e.key)) {
            return;
        }
        const dropdownListInteraction = e.composedPath().includes(this.dropdown);
        if (!dropdownListInteraction) {
            this.isDropdownVisible = !this.isDropdownVisible;
        }
    }
    render() {
        return html `<div class="grid-menu">
      <span
        @click=${this.handleDropdownToggle}
        @keyDown=${this.handleDropdownToggle}
        class="list list-dropdown"
      >
 <button style="background: none; border: none; padding: 0; cursor: pointer;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 9H7V5H3V9ZM7 14H3V10H7V14ZM7 19H3V15H7V19ZM20 14H8V10H20V14ZM8 19H20V15H8V19ZM8 9V5H20V9H8Z"
              fill="#e08114"
            />
          </svg>
        </button>
        ${this.disabledColumns.length > 0
            ? html `<div class="active"></div>`
            : nothing}
        ${this.isDropdownVisible
            ? html ` <div
              class="dropdown-content"
              @dragover=${(e) => e.preventDefault()}
              @dragstart=${this.dragstart}
              @dragend=${this.dragend}
              @dragenter=${this.dragenter}
            >
              ${repeat(this.columns.filter(c => c.filterable !== false), (col) => col.name, (col, id) => html `<div>
                  <label
                    class=${`drag-target ${this.dragEvent.startId === id ? 'dragOrigin' : ''}`}
                    draggable=${this.columnReorderingAllowed}
                    data-id=${id}
                  >
                    <md-switch
                    class="custom-switch"
                    style="transform: scale(0.75); transform-origin: left center; filter: drop-shadow(0 0px 1px #00000090);"
                      .selected=${!col.hidden}
                      @change=${(e) => this.updateColumn(e, id)}
                    >
                    </md-switch>
                 <p style="color: black;">${col.header}</p>
                    ${this.columnReorderingAllowed
                ? html `<div class="draggable">${handleIcon}</div>`
                : nothing}
                  </label>
                </div>`)}
            </div>`
            : nothing}
      </span>
    </div>`;
    }
};
PrGridColumnFilter.styles = [PrGridViewStyles, PrGridColumnFilterStyles];
__decorate([
    query('.dropdown-content')
], PrGridColumnFilter.prototype, "dropdown", void 0);
__decorate([
    property({ type: Array })
], PrGridColumnFilter.prototype, "columns", void 0);
__decorate([
    property({ type: String })
], PrGridColumnFilter.prototype, "columnsLocalStorageKey", void 0);
__decorate([
    property({ type: Boolean })
], PrGridColumnFilter.prototype, "columnReorderingAllowed", void 0);
__decorate([
    property({ type: Boolean })
], PrGridColumnFilter.prototype, "refreshDataOnColumnVisibilityChange", void 0);
__decorate([
    property({ attribute: false })
], PrGridColumnFilter.prototype, "requestGridUpdate", void 0);
__decorate([
    state()
], PrGridColumnFilter.prototype, "isDropdownVisible", void 0);
__decorate([
    state()
], PrGridColumnFilter.prototype, "disabledColumns", void 0);
__decorate([
    state()
], PrGridColumnFilter.prototype, "dragEvent", void 0);
PrGridColumnFilter = __decorate([
    customElement('pr-grid-column-filter')
], PrGridColumnFilter);
export { PrGridColumnFilter };
