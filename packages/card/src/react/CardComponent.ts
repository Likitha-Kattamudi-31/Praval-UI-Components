import React from 'react';
import { createComponent } from '@lit/react';
import { CardComponent as LitComp } from '../CardComponent.js';

customElements.define('card-component', LitComp);

export const CardComponent = createComponent({
  tagName: 'card-component',
  elementClass: LitComp,
  react:React
});
