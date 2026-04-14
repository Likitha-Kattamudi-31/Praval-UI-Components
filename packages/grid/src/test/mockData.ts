import { html } from 'lit';

export const rows = [
  {
    name: 'one',
  },
  {
    name: 'two',
  },
  {
    name: 'three',
  },
];

type Row = {
  name: string;
};

export const columns = [
  {
    name: 'one',
    header: 'one',
    bodyRenderer: (row: Row) => html`<span>${row.name}</span>`,
    filterable: true,
    filterOperators: ['equals'],
  },
  {
    name: 'two',
    header: 'one',
    bodyRenderer: (row: Row) => html`<span>${row.name}</span>`,
    filterable: true,
    filterOperators: ['equals', 'contains'],
  },
  {
    name: 'three',
    header: 'one',
    bodyRenderer: (row: Row) => html`<span>${row.name}</span>`,
    filterable: true,
    filterOperators: ['equals', 'contains'],
  },
];