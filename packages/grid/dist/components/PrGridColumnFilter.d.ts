import { LitElement, PropertyValues } from 'lit';
import '@material/web/switch/switch.js';
import type { Column } from '../PrGrid.js';
export declare class PrGridColumnFilter extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    dropdown: HTMLElement;
    columns: Column[];
    columnsLocalStorageKey: string | undefined;
    columnReorderingAllowed: boolean;
    refreshDataOnColumnVisibilityChange: boolean;
    requestGridUpdate: any;
    private isDropdownVisible;
    disabledColumns: string[];
    dragEvent: {
        sourceEl: HTMLElement | null;
        startId: number;
        targetId: number;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    outerInteraction: (e: Event) => void;
    get preservedColumns(): Column[];
    initializeLocalStorage(): void;
    protected update(changedProperties: PropertyValues): void;
    toggleColumn(id: number): void;
    updateColumn(e: Event, id: number): void;
    dispatchUpdate(columns?: Column[]): void;
    dragstart(e: DragEvent): void;
    dragend(): void;
    dragenter(e: DragEvent): void;
    handleDropdownToggle(e: Event | KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
