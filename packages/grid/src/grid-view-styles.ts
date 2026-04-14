import { css } from "lit";

export const PrGridViewStyles = css`
  :host {
    --_ix-grid-cell-padding: var(--ix-grid-cell-padding, 1rem);
    --lumo-primary-color-50pct: transparent;
  }

  vaadin-grid::part(first-frozen-to-end-cell) {
    border-left: 0.063rem solid var(--_lumo-grid-border-color);
    box-shadow: -0.375rem 0 0.375rem -0.375rem #0000001a;
  }

  * {
    font-family: inherit;
  }

  vaadin-grid::part(cell) {
    cursor: var(--ix-grid-cell-pointer, pointer);
  }

  vaadin-grid::part(header-cell) {
    cursor: default;
    --vaadin-grid-cell-background: #fff;
  }

  vaadin-grid::part(row):hover {
    --vaadin-grid-cell-background: var(--ix-grid-hover-background, #f5f5f5);
  }

  vaadin-grid-cell-content {
    font-size: 14px;
    --_cell-padding: var(--pr-grid-cell-padding, 14px 10px);
  }

  .hide-column-headers::part(header-cell) {
    display: none;
  }
  .footer-button {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: #e08114;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    user-select: none;
  }
  .footer-button:hover {
    text-decoration: underline;
  }

  .footer-button:focus {
    outline: 2px solid #e08114;
    outline-offset: 2px;
  }
  vaadin-grid::part(ix-disabled-cell) {
    cursor: default;
    color: var(--cp-neutral-blue-60p);
    --vaadin-grid-cell-background: var(--cp-neutral-blue-12p);
  }

  pr-grid-download-menu {
    width: 38px;
    margin-right: 2px;
  }

  pr-grid-column-filter {
    width: 36px;
  }
  .menu-item {
    background: none;
    border: none;
  }

  .menu-item:hover,
  .menu-item:focus {
    background-color: #e0e7ff;
    outline: none;
  }
  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  .grid-container {
    background-color: var(--clr-surface-container-lowest, #ffffff);
    border-radius: 8px;
    box-shadow:
      rgba(0, 0, 0, 0.12) 0px 12px 20px -12px,
      #e1e4e8 0px 0px 0px 1px inset;
    box-sizing: border-box;
    padding: 2px;
  }

  .touch-edge {
    margin: 0 -3px;
  }

  .grid-header {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    // display: flex;
    // -webkit-box-pack: justify;
    // place-content: space-between;
    // -webkit-box-align: center;
    // align-items: center;
    // padding: 1rem;
    // flex-wrap: wrap;
    // gap: 18px;
  }

  .grid-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .grid-menu ix-button {
    --md-text-button-leading-space: 4px;
    --md-text-button-trailing-space: 4px;
  }

  .grid-menu span {
    color: var(--clr-primary, #e08114);
    cursor: pointer;
  }

  .header {
    font-weight: bold;
    display: flex;
    user-select: none;
    align-items: center;
    padding-right: calc(var(--_ix-grid-cell-padding) + 2px);
    position: relative;

    &:not(.frozen):not(.last).border::after {
      content: "";
      display: block;
      position: absolute;
      border: 0;
      border-right-width: var(--ix-grid-header-border-width, 2px);
      border-color: var(
        --ix-grid-header-border-color,
        var(--clr-outline, #0922411f)
      );
      border-style: solid;
      margin-right: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    .header-label {
      position: relative;
      text-overflow: ellipsis;
      overflow: hidden;
      flex-grow: 1;
      z-index: 2;
      padding-left: 0.25rem;
    }
  }

  .header .header-sort-icon {
    background: #fff;
    display: none;
    padding-left: 5px;
    font-size: 17px;
    color: rgba(0, 0, 0, 0.54);
    cursor: pointer;
    height: 18px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }

  .header:hover .header-sort-icon {
    display: block;
  }

  .columns-reordering {
    opacity: 0.25;
  }

  .progress-container {
    position: relative;
    top: var(--progress-bar-top, 60px);
    z-index: 1;
  }

  span .disabled {
    color: var(--clr-on-surface-variant, rgba(9, 34, 65, 0.7));
  }

  .disable-cursor {
    cursor: default !important;
  }

  .accounts {
    display: flex;
    align-items: center;
  }

  .account-name {
    margin: 0 8px 0 3px;
  }

  vaadin-grid-cell-content {
    font-family: var(--text-small-font, sans-serif);
    font-size: var(--text-small-size, 0.875rem);
    letter-spacing: var(--text-small-letter-spacing, 0.0275em);
    line-height: var(--text-small-line-height, 1.42857143em);
    font-weight: var(--text-small-weight, normal);
    text-decoration: var(--text-small-decoration, none);
    text-transform: var(--text-small-transform, none);
    --_cell-padding: var(--ix-grid-cell-padding, 14px 10px);
  }

  vaadin-grid-cell-content > div {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row-controls {
    border-top: solid 1px var(--clr-border-outline, #0922411f);
    padding: 8px;
  }

  .more-pagination {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .pagination {
    flex-grow: 1;
  }

  .row-limit {
    display: flex;
    padding: 8px;
  }

  .remove-all-button {
    margin-left: auto;
  }

  /* launchpad variant */
  .launchpad vaadin-grid {
    --lumo-size-xl: auto;
  }

  .launchpad {
    --ix-grid-cell-height: 44px;
    --ix-grid-cell-padding: 14px 24px;
  }

  .launchpad .grid-header {
    padding: 0.5rem 18px 0;
  }

  .launchpad .header {
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);
  }

  .launchpad .grid-header h2 {
    font-family: var(--text-page-title-font, sans-serif);
    font-size: var(--text-page-title-size, 2.125rem);
    letter-spacing: var(--text-page-title-letter-spacing, 0.01029412em);
    line-height: var(--text-page-title-line-height, 1.17647059em);
    font-weight: var(--text-page-title-weight, bold);
    text-decoration: var(--text-page-title-decoration, none);
    text-transform: var(--text-page-title-transform, none);
  }

  vaadin-grid-cell-content {
    height: var(--ix-grid-cell-height, 52px);
  }

  @media only screen and (max-width: 840px) {
    .grid-header {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      justify-content: space-between;
    }
    .grid-menu {
      padding-left: 0;
      margin-left: -4px;
    }
  }

  @media only screen and (max-width: 600px) {
    .grid-header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding: 1rem;
      gap: 12px;
    }
    .grid-container {
      border-radius: 0;
      box-shadow: none;
      padding: 0;
      overflow: hidden;
    }
  }
  .column-max-width-set {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
`;
