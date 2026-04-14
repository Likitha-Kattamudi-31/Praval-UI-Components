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
export const columns = [
    {
        name: 'one',
        header: 'one',
        bodyRenderer: (row) => html `<span>${row.name}</span>`,
        filterable: true,
        filterOperators: ['equals'],
    },
    {
        name: 'two',
        header: 'one',
        bodyRenderer: (row) => html `<span>${row.name}</span>`,
        filterable: true,
        filterOperators: ['equals', 'contains'],
    },
    {
        name: 'three',
        header: 'one',
        bodyRenderer: (row) => html `<span>${row.name}</span>`,
        filterable: true,
        filterOperators: ['equals', 'contains'],
    },
];
