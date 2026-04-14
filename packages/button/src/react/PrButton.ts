import React from 'react';
import { createComponent } from '@lit/react';
import { PrButton as PrButtonLit } from '../PrButton.js';

customElements.define('pr-button', PrButtonLit);

export const PrButton = createComponent({
  tagName: 'pr-button',
  elementClass: PrButtonLit,
  react: React,
});
