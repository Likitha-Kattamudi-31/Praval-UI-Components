import { LitElement } from "lit";
export declare class PrPagination extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    recordCount: number;
    page: number;
    pageSize: number;
    pageSizes: number[];
    isSimple: boolean;
    private changePage;
    private handlePageSizeSelection;
    updatePagination(page?: number, pageSize?: number): void;
    render(): import("lit-html").TemplateResult<1>;
}
