import { css } from 'lit';
export const PrGridColumnFilterStyles = css `
  .dropdown-content {
    position: absolute;
    background-color: var(--clr-surface-container-lowest, #fff);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 9;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    padding: 10px;
    width: 247px;
    left: -100px;
    border-radius: 16px;
  }

  .dropdown-content > div {
    margin: 0px;
    color: var(--clr-on-surface, #e08114);
    font-family: var(--text-small-font, sans-serif);
    font-size: var(--text-small-size, 0.875rem);
    letter-spacing: var(--text-small-letter-spacing, 0.0275em);
    line-height: var(--text-small-line-height, 1.42857143em);
    font-weight: var(--text-small-weight, normal);
    text-decoration: var(--text-small-decoration, none);
    text-transform: var(--text-small-transform, none);
    display: block;
    cursor: pointer;
  }

  .dropdown-content span:hover {
    background-color: #f1f1f1;
  }

  .dropdown-content label {
    display: flex;
    align-items: center;
  }

  .dropdown-content label.dragOrigin {
    background: #ff000017;
    outline: 1px #ff9d9d dashed;
  }

  .dropdown-content label p {
    width: 158px;
  }

  .dropdown-content label .draggable {
    font-size: 24px;
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  .dropdown-content label .draggable path {
    fill: var(--clr-primary, #e08114);
  }
  .custom-switch {
  --md-switch-selected-track-color: #e08114;
  --md-switch-selected-hover-track-color: #e08114;
  --md-switch-selected-focus-track-color: #e08114;
  --md-switch-selected-pressed-track-color: #e08114;

  --md-switch-selected-handle-color: #ffffff;

  --md-switch-selected-hover-state-layer-color: transparent;
  --md-switch-selected-focus-state-layer-color: transparent;
  --md-switch-selected-pressed-state-layer-color: transparent;
}
  .active {
    position: absolute;
    right: 8px;
    top: 8px;
    height: 8px;
    width: 8px;
    background-color: var(--clr-critical, #f80532);
    border-radius: 50%;
  }

  .list {
    position: relative;
  }

  @media only screen and (max-width: 840px) {
    .dropdown-content {
      left: 0;
    }
  }
`;
