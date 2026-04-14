import React from 'react';
import { createComponent } from '@lit/react';
import { PrGrid as PrGridLit } from '../PrGrid.js';

customElements.define('pr-grid', PrGridLit);

export const PrGrid = createComponent({
  tagName: 'pr-grid',
  elementClass: PrGridLit,
  react: React,
});
