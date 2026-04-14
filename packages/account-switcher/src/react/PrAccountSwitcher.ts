import React from 'react';
import { createComponent } from '@lit/react';
import { PrAccountSwitcherStyled as PrAccountSwitcherLit} from '../pr-account-switcher.js';


if (!customElements.get("pr-account-switcher")) {
  customElements.define("pr-account-switcher", PrAccountSwitcherLit);
}

export const PrAccountSwitcher = createComponent({
  tagName: 'pr-account-switcher',
  elementClass: PrAccountSwitcherLit,
  react: React,
});
