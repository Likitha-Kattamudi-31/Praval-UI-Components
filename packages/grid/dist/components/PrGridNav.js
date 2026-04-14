import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
export class PrGridNavigation extends LitElement {
    constructor() {
        super(...arguments);
        this.buttons = [];
        this.renderButton = ({ path, text, onClick, testId, disabled, selected, }) => html `
  <button
    type="button"
    class="button ${selected ? 'selected' : ''}"
    data-testid=${ifDefined(testId)}
    ?disabled=${disabled || selected}
    style=${selected ? 'pointer-events: none;' : ''}
    @click=${(e) => {
            if (disabled || selected)
                return;
            onClick?.();
            if (path && !selected) {
                window.location.href = path;
            }
        }}
  >
    <span class="button-text">${text}</span>
  </button>
`;
    }
    render() {
        return html `
      <div class="container">
        ${this.buttons.map(button => this.renderButton(button))}
      </div>
    `;
    }
}
PrGridNavigation.styles = css `
    :host {
      --grid-nav-button-container-height: 2.5rem;
    }

    .container {
      display: var(--grid-nav-button-group-display, flex);
      gap: var(--grid-nav-button-group-gap, 0.5rem);
    }

    .button {
      margin: var(--grid-nav-button-margin, 0);
      height: var(--grid-nav-button-container-height);
      padding: 0 1rem;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: var(--root-primary-font, 'sans-serif');
    }

    .button.selected {
      background: var(--clr-on-surface, #092241);
      color: white;
      cursor: default;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .button-text {
      text-transform: var(--grid-nav-button-text-transform, none);
      font-size: var(--grid-nav-button-font-size, 14px);
      line-height: 1.5rem;
    }

    @media only screen and (max-width: 840px) {
      .container {
        overflow-x: auto;
        white-space: nowrap;
      }

      .button {
        flex: 0 0 auto;
      }
    }

    @media only screen and (max-width: 600px) {
      .container {
        overflow-x: auto;
        max-width: calc(100vw - 2rem);
      }
    }
  `;
__decorate([
    property({ type: Array, attribute: false })
], PrGridNavigation.prototype, "buttons", void 0);
