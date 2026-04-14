import { css } from 'lit';
export const PaginationStyles = css `
  :host {
    --md-filled-select-text-field-input-text-size: var(
      --ix-filled-select-text-field-input-text-size,
      12px
    );
  }

  [hidden] {
    display: none !important;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);
    margin: 1.25rem 0.5rem 1.25rem 1rem;
  }

  .pagination.simple {
    margin: 0;
  }

  .pagination > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .pagination p {
    margin: 0;
  }

  .pagination-nav {
    display: flex;
    margin-left: 1.5rem;
    height: 1.5rem;
    gap: 0.5rem;
  }

  .pagination-nav > ix-icon-button {
    margin-top: -0.5rem;
  }

  .rows-per-page {
    color: var(--clr-on-surface, #092241);
  }

  ix-select {
    --md-menu-container-color: var(--bg-surface-container-lowest, #fff);
    --md-filled-select-text-field-container-color: var(
      --bg-surface-container-lowest,
      #fff
    );
    --md-filled-select-text-field-active-indicator-height: 0px;
    --md-filled-select-text-field-hover-indicator-height: 0px;
    --md-filled-field-hover-active-indicator-height: 0px;
    --md-filled-field-focus-active-indicator-height: 0px;
    --md-filled-field-bottom-space: 4px;
    --md-filled-field-top-space: 4px;

    --md-filled-select-text-field-focus-trailing-icon-color: var(
      --clr-primary,
      #e08114
    );
    --md-filled-select-text-field-focus-active-indicator-color: var(
      --md-filled-select-text-field-focus-trailing-icon-color
    );
  }

  ix-select-option {
    --md-menu-item-selected-container-color: rgba(20, 86, 224, 0.1);
  }

  @media only screen and (max-width: 600px) {
    .pagination {
      justify-content: space-between;
    }
    .pagination > div {
      gap: 0;
    }
  }
`;
