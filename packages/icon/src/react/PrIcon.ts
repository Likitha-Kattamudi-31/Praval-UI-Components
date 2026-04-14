import React from 'react';
import { createComponent } from '@lit/react';
import { PrIconStyled as LitComp } from '../pr-icon.js';

if (!customElements.get('pr-icon')) {
  customElements.define('pr-icon', LitComp);
}

export const PrIcon = createComponent({
  tagName: 'pr-icon',
  elementClass: LitComp,
  react: React,
});
