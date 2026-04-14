import { css } from 'lit';
import { PrAccountSwitcher } from './PrAccountSwitcher.js';
import { AccountSwitcherStyles } from './account-switcher-styles.js';
export class PrAccountSwitcherStyled extends PrAccountSwitcher {
}
PrAccountSwitcherStyled.styles = [
    AccountSwitcherStyles,
    css `
      :host {
        --md-theme-primary: var(--md-sys-color-primary, blue);
      }
    `,
];
window.customElements.define('pr-account-switcher', PrAccountSwitcherStyled);
