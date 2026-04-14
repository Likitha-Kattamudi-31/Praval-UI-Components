import React from 'react';
import { createComponent } from '@lit/react';
import { PrGridNavigation } from './components/PrGridNav.js';
export const PrGridNav = createComponent({
    tagName: 'pr-grid-nav-react',
    elementClass: PrGridNavigation,
    react: React,
});
