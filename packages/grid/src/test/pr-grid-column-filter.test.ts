import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import '../components/PrGridColumnFilter.js';
import { describe, it } from 'vitest';

const columns = [
  {
    name: 'firstName',
    header: 'First name',
    hidden: false,
  },
  {
    name: 'lastName',
    header: 'Last name',
    hidden: true,
  },
  {
    name: 'middleName',
    header: 'Middle name',
    hidden: false,
  },
  {
    name: 'email',
    header: 'Email',
    hidden: false,
    filterable: false,
  },
];

describe('PrGridColumnFilter', () => {
  it('renders the grid column filter component', async () => {
    const el = await fixture(
      html`<pr-grid-column-filter></pr-grid-column-filter>`
    );

    expect(el).to.not.be.null;
  });

  it('renders the grid column filters list', async () => {
    const el = await fixture(
      html`<pr-grid-column-filter .columns=${columns}></pr-grid-column-filter>`
    );

    const list = el.shadowRoot?.querySelector('.list') as HTMLInputElement;

    list.click();

    await elementUpdated(el);

    const options = el.shadowRoot?.querySelectorAll('md-switch');

    expect(options?.length).to.equal(3);
  });
});
