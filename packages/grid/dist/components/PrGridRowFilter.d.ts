import { LitElement } from "lit";
import type { Column, DataType } from "../PrGrid.js";
export interface Filter {
    columnField: string;
    operatorValue: string;
    dataType?: DataType;
    value: string;
}
export declare class PrGridRowFilter extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    columns: Column[];
    filterValueChangeDebounceTime: number;
    readParamsFromURL: boolean;
    maxDate: string;
    private isDropdownVisible;
    private filters;
    private filterableColumns;
    private filterColumns;
    private mapSelect;
    private activeFilters;
    private oldValueLength;
    private debounceEvent?;
    private debouncedOnFilterValueChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updateActiveFilters(): void;
    get filterNames(): string[];
    get unselectedFilters(): string[];
    closeOnOuterClick: (e: Event) => void;
    parseFilterQueryString(): Filter[];
    dispatchUpdate(resetPage?: boolean): void;
    addFilter(): void;
    clearFilters(): void;
    removeFilter(index: number): void;
    private handlePopState;
    private onfilterColumnChange;
    private onfilterOperatorChange;
    private onDatefilterValueChange;
    private onfilterValueChange;
    private renderDateInput;
    renderStringInput(value: any, index: number): import("lit-html").TemplateResult<1>;
    private renderFilterInputControl;
    renderFilterInput(value: Filter, index: number): import("lit-html").TemplateResult<1>;
    renderDropdown(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
