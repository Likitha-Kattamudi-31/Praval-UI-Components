import { css } from 'lit';
import { PrIcon } from './PrIcon.js';
export class PrIconStyled extends PrIcon {
}
PrIconStyled.styles = css `
    :host {
      font-size: var(--pr-icon-font-size);
      height: var(--pr-icon-font-size);
      line-height: var(--pr-icon-line-height);
      width: var(--pr-icon-font-size);
    }

    md-icon {
      font-size: var(--pr-icon-font-size);
      height: var(--pr-icon-font-size);
      line-height: var(--pr-icon-line-height);
      width: var(--pr-icon-font-size);
    }

    md-icon[filled] {
      font-variation-settings: 'FILL' 1;
    }
  `;
customElements.define('pr-icon', PrIconStyled);
//# sourceMappingURL=pr-icon.js.map