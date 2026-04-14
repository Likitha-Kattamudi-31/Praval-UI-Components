import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
export class PrGridNoRows extends LitElement {
    constructor() {
        super(...arguments);
        this.type = 'error';
        this.icon = '⚠️';
        this.message = 'No data to display';
        this.iconFontSize = '3rem';
    }
    render() {
        return html `
      <div class="container" style="--ix-icon-font-size:${this.iconFontSize};">

        <span class="icon ${this.type}">
          ${this.icon}
        </span>

        <h2 class="dlr-text-heading">
          ${this.message}
        </h2>

      </div>
    `;
    }
}
PrGridNoRows.styles = css `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      padding: 2.5rem 0;
    }

    .icon {
      user-select: none;
      display: inline-block;
      flex-shrink: 0;
      font-size: var(--ix-icon-font-size, 3rem);
      transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .warning,
    .error {
      color: var(--clr-warning, #ff9800);
    }

    .critical {
      color: var(--clr-critical, #db0028);
    }

    h2 {
      font-family: var(--ix-font-family, 'Red Hat Display');
    }

    h2.dlr-text-heading {
      margin: 0.5rem 0 0;
      font-family: 'Red Hat Display', sans-serif;
      font-style: normal;
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0em;
      color: rgb(9, 34, 65);
      text-align: center;
      font-weight: 700;
    }
  `;
__decorate([
    property({ type: String })
], PrGridNoRows.prototype, "type", void 0);
__decorate([
    property({ type: String })
], PrGridNoRows.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], PrGridNoRows.prototype, "message", void 0);
__decorate([
    property({ type: String })
], PrGridNoRows.prototype, "iconFontSize", void 0);
