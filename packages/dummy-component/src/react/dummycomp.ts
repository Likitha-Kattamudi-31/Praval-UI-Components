import React from 'react';
import { createComponent } from '@lit/react';
import { DummyComponent as LitComp } from '../DummyComponents.js';

customElements.define('dummy-component', LitComp);

export const DummyComponentReact = createComponent({
  tagName: 'dummy-component-react',
  elementClass: LitComp,
  react: React,
});
