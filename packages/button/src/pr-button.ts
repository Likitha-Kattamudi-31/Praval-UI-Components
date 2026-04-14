import { css } from 'lit';
import { PrButton } from './PrButton.js';

export class PrButtonStyled extends PrButton {
  static override styles = css`
    .md-button {
      display: flex;
      --md-circular-progress-size: 24px;
    }

    .slot-wrap {
      font-family: var(
        --pr-button-font-family,
        var(--root-secondary-font, 'sans-serif')
      );
      font-weight: var(--pr-button-font-weight, bold);
      text-transform: var(--pr-button-text-transform, uppercase);
      position: relative;
      letter-spacing: var(--pr-button-letter-spacing, 1.25px);
    }

    :host {
      overflow: hidden;
    }

    :host(.login) {
      --md-filled-button-pressed-state-layer-color: var(
        --clr-secondary,
        #071454
      );
      --md-filled-button-pressed-state-layer-opacity: 1;
      --md-filled-button-hover-state-layer-color: var(--clr-secondary, #071454);
      --md-filled-button-hover-state-layer-opacity: 1;
      --md-filled-button-container-shape: 0;
    }

    :host(.critical),
    :host(.cancel) {
      --md-outlined-button-pressed-outline-color: var(
        --pr-button-pressed-clr-critical-outline,
        var(--clr-critical, #db0028)
      );

      --md-sys-color-on-primary: var(
        --pr-button-clr-on-critical,
        var(--clr-on-critical, #fff)
      );
      --md-sys-color-primary: var(
        --pr-button-clr-critical,
        var(--clr-critical, #db0028)
      );
      --md-outlined-button-outline-color: var(
        --pr-button-clr-critical-outline,
        var(--clr-critical, #db0028)
      );
      --md-filled-button-hover-state-layer-color: var(
        --pr-button-clr-critical-hover,
        var(--clr-critical-hover, #f83b3a)
      );
    }
  `;
}

window.customElements.define('pr-button', PrButtonStyled);
