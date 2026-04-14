import { css } from "lit";

export const PrGridRowFilterStyles = css`
  .slot-wrap {
    display: flex;
  }

  .slot-wrap {
    color: var(--clr-primary, #e08114);
    margin-right: 5px;
  }

  .grid-menu .filter {
    margin-top: 2px;
  }
  .filter-form {
    white-space: nowrap;
    padding: 9px;
    color: var(--clr-on-surface-variant, #092241b3);
  }
  .filter_list {
    display: flex;
    flex-direction: row;
    margin-top: -5px;
    column-gap: 10px;
    padding: 3px;
    border: none;
    background: none;
    font-size: medium;
    font-style: normal;
    font-weight: bold;
  }
  .add-filter-button {
    background: none;
    border: none;
    font-size: medium;
  }
  .add-filter-button:hover {
    cursor: pointer;
  }
  .filter-form-column {
    display: inline-block;
    vertical-align: middle;
  }

  .filter-remove span {
    margin-right: 0px;
    color: var(--clr-on-surface-variant, #092241b3);
  }

  .filter-dropdown-content {
    position: absolute;
    display: inline;
    right: 0;
    top: 78%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 3;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 12px;
    box-shadow:
      rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
      rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    background-color: #ffffff;
    z-index: 10;
  }

  .filter-form input,
  .filter-form select,
  .filter-form option {
    font-family: var(--text-default-font, sans-serif);
    font-size: var(--text-default-size, 16px);
    letter-spacing: var(--text-default-letter-spacing, 0.0275em);
    line-height: var(--text-default-line-height, 1.75em);
    font-weight: var(--text-default-weight, normal);
    text-transform: var(--text-default-decoration, none);
    text-decoration: var(--text-default-transform, none);
    border-radius: 0px;
    cursor: pointer;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0px;
    animation-name: mui-auto-fill-cancel;
    animation-duration: 10ms;
    border: none;
    border-image: initial;
    box-sizing: border-box;
    cursor: text;
    user-select: none;
    color: currentcolor;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0px;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid black;
  }

  .filter-form option {
    -webkit-tap-highlight-color: #9ca6b2;
  }

  .filter-form input:hover,
  .filter-form select:hover {
    outline: none !important;
    border-bottom: 2px solid black;
  }

  .filter-form input:focus,
  .filter-form select:focus {
    outline: none !important;
    border-bottom: 2px solid #e08114;
  }

  .filter-form select:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 54px;
    justify-content: flex-end;
    font-family: var(--text-default-font, sans-serif);
  }

  .form-group label {
    font-family: var(--text-default-font, sans-serif);
    font-size: var(--text-default-size, 16px);
    letter-spacing: var(--text-default-letter-spacing, 0.0275em);
    line-height: var(--text-default-line-height, 1.75em);
    font-weight: var(--text-default-weight, normal);
    text-transform: var(--text-default-decoration, none);
    text-decoration: var(--text-default-transform, none);
    padding: 0px;
    color: #092241;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 133%;
    transform: translate(0px, -1.5px) scale(0.75);
    transition:
      color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .filter-form-group label span {
    font-family: var(--text-default-font, sans-serif);
    font-size: var(--text-default-size, 16px);
    letter-spacing: var(--text-default-letter-spacing, 0.0275em);
    line-height: var(--text-default-line-height, 1.75em);
    font-weight: var(--text-default-weight, normal);
    text-transform: var(--text-default-decoration, none);
    text-decoration: var(--text-default-transform, none);
    padding: 0px;
    color: #092241;
    display: block;
    transform-origin: left top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 133%;
    transform: translate(0px, -1.5px) scale(0.75);
    transition:
      color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .filter-form-group label:focus-within span {
    color: #e08114;
  }

  .filter-form-group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    height: 54px;
    justify-content: space-between;
    font-family: var(--text-default-font, sans-serif);
    white-space: wrap;
  }

  option {
    font-weight: normal;
    display: block;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
  }

  .filter-footer {
    padding: 9px;
    display: flex;
    justify-content: space-between;
  }

  .no-display {
    display: none;
  }

  .filter-local-operator-empty {
    width: 54px;
    border: none;
  }

  .grid-menu span.filter-superscript {
    position: absolute;
    top: 6px;
    left: 14px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);
    padding: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: var(--clr-primary, #e08114);
    color: var(--clr-on-primary, #fff);
  }

  .filterlist {
    width: 40px;
  }

  .filterColumnField {
    width: 150px;
  }

  .filterValueField {
    width: 190px;
  }

  .filterOperatorField {
    width: 120px;
  }

  .form-group-operator-label {
    width: 100%;
  }

  .filter-form .filterOperatorInput {
    min-width: 96px;
  }

  select:hover {
    cursor: pointer;
  }

  input:hover {
    cursor: text;
  }

  .tooltip-container {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .tool-tip {
    color: var(--clr-on-secondary, #fff);
    overflow-wrap: break-word;
    border-radius: 3px;
    background-color: var(--clr-secondary, #071454);
    padding: 5px 8px;
    font-family: var(--text-caption-font, sans-serif);
    font-size: var(--text-caption-size, 0.75rem);
    letter-spacing: var(--text-caption-letter-spacing, 0.03333333em);
    line-height: var(--text-caption-line-height, 1.33333333em);
    font-weight: var(--text-caption-weight, normal);
    text-transform: var(--text-caption-transform, none);
    text-decoration: var(--text-caption-decoration, none);

    position: absolute;
    top: 42px;
    right: 0;
    z-index: 3;
    white-space: nowrap;
    display: none;
  }

  .filter-button:hover ~ .tool-tip {
    display: block;
  }

  .tool-tip li {
    margin-left: -21px;
    overflow-wrap: break-word;
    border-radius: 3px;
    max-width: 250px;
    min-width: 200px;
    white-space: wrap;
  }

  .tool-tip p {
    margin: 0;
    padding: 0;
  }

  .grid-menu{
    align-items: center;
    display: flex;
  }

  @media only screen and (max-width: 840px) {
    .filter-dropdown-content {
      right: inherit;
      top: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .grid-menu .filter {
      display: none;
    }
    .grid-menu {
      --md-text-button-leading-space: 6px;
      --md-text-button-trailing-space: 0;
      margin-left: 4px;
    }
  }
`;
