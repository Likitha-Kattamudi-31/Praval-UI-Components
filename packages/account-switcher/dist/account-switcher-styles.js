import { css } from "lit";
export const AccountSwitcherStyles = css `
  #searchInput {
    width: 470px;
    height: 30px;
  }
  .icon-button {
    background: white;
    border: none;
  }
  #account-switcher-dialog {
    position: relative;
    z-index: var(--ix-account-switcher-z-index, 50);
    border: 1px solid grey;
    border-radius: 20px;
    width: 520px;
    max-width: 90vw;
    background: var(--clr-surface-container-lowest, #fff);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    font-family: var(--root-secondary-font, "Red Hat Display", sans-serif);
    padding: 20px;
    z-index: var(--ix-account-switcher-z-index, 50);
  }
  .subaccount-wrap {
    height: 21px;
    background: var(--clr-surface-container-lowest, #fff);
    display: flex;
    border-radius: 5px;
    border: 1px solid black;
    --ix-icon-font-size: 1.6rem;
    padding: 8px;
  }
  .subaccount-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 0;
    flex: 1;
  }
  .dd-icon {
    margin: -2px -5px -5px 0px;
  }
  .dd-icon:hover {
    cursor: pointer;
  }
  .headline {
    display: flex;
  }
  .title {
    margin-left: 20px;
    flex: 1;
    font-size: 1.25rem;
    line-height: 24px;
    font-family: var(--root-secondary-font, "Red Hat Display", "sans-serif");
    font-weight: 700;
  }
  #account-switcher-dialog-form {
    padding: 8px 24px;
  }
  #accountTree {
    overflow: auto;
    border: 1px solid grey;
    border-radius: 0.25rem;
    height: 50vh;
    margin: 1rem 0;
    padding: 0;
    width: 475px;
  }

  .account-switcher__select select {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 35px 10px 12px;
    border-radius: 6px;
    border: 1px solid #d6d6d6;
    font-size: 14px;
    background: white;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
  .select-arrow {
    font-size: 20px;
    margin-left: -30px;
  }
  #loadMore,
  #loadPrevious {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    --md-circular-progress-size: 40px;
  }


  .account-filter {
    cursor: pointer;
    padding: 2px;
  }
  .account-filter:hover {
    text-decoration: underline;
  }
  .account-filter.active {
    text-decoration: underline;
    font-weight: bold;
  }
  .padded-container {
    padding: 12px;
  }
  .loading-container,
  .loading-container-switch {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .loading-container-switch {
    min-height: 300px;
  }
  .stick-to-top {
    position: sticky;
    top: 0;
    background-color: rgb(200, 223, 250);
    z-index: 1;
  }

  .no-results {
    padding: 12px 0 0 24px;
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    color: rgba(9, 34, 65, 0.7);
  }
  @media only screen and (max-width: 600px) {
    :host {
      --md-outlined-field-container-shape: 0px;
    }

    .subaccount-wrap {
      border-radius: 0;
    }

    #accountTree {
      max-width: 100%;
    }
  }
`;
