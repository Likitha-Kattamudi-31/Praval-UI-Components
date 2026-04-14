import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PrGridViewStyles } from '../grid-view-styles.js';
import { PrGridDownloadMenuItemModel } from '../models/PrGridDownloadMenuItemModel.js';

@customElement('pr-grid-download-menu')
export class PrGridDownloadMenu extends LitElement {

  static readonly styles = [PrGridViewStyles];

  @property({ type: Array })
  items: PrGridDownloadMenuItemModel[] = [];

  @property({ type: Boolean })
  isDownloading = false;

  @state()
  private open = false;

  toggleMenu() {
    this.open = !this.open;
  }

  closeMenu() {
    this.open = false;
  }

  dispatchDownload(type: string) {
    this.dispatchEvent(
      new CustomEvent('download', {
        detail: type,
        bubbles: true,
        composed: true
      })
    );
    this.closeMenu();
  }

  renderMenuItems() {

    if (!this.items || this.items.length === 0) {
      return html`

        <button
          class="menu-item"
          @click=${() => this.dispatchDownload('all')}
        >
          Download All Records
        </button>

        <button
          class="menu-item"
          @click=${() => this.dispatchDownload('filter')}
        >
          Download Current Filter
        </button>

      `;
    }

    return this.items
      .filter(x => !x.hidden)
      .map(m => html`

        <button
          class="menu-item"
          ?disabled=${m.disabled}
          @click=${() => {
            m.onClick(m.name);
            this.closeMenu();
          }}
        >
          ${m.label}
        </button>

      `);
  }

  render() {

    if (this.isDownloading) {
      return html`
        <div style="padding:0.5rem;">
          ⏳ Downloading...
        </div>
      `;
    }

    return html`

      <div style="position:relative">

        <button
          id="anchor"
          @click=${this.toggleMenu}
          style="background:none;border:none;cursor:pointer;"
        >

          <!-- download icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z"
              fill="#E08114"
            />
          </svg>

        </button>

        ${this.open
          ? html`

              <div
                class="menu"
                style="
                  position:absolute;
                  top:30px;
                  right:0;
                  background:white;
                  border:1px solid #ddd;
                  box-shadow:0 2px 8px rgba(0,0,0,0.15);
                  z-index:100;
                  min-width:130px;
                "
              >

                ${this.renderMenuItems()}

              </div>

            `
          : ''}

      </div>

    `;
  }
}