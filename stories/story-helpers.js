import { html } from 'lit';
import { borders } from './styles.js';

export const defaultStoryLayout = story =>
  html`<style>
      ${borders}
    </style>
    <div class="borders">${story()}</div> `;
