export declare const rows: {
    name: string;
}[];
type Row = {
    name: string;
};
export declare const columns: {
    name: string;
    header: string;
    bodyRenderer: (row: Row) => import("lit-html").TemplateResult<1>;
    filterable: boolean;
    filterOperators: string[];
}[];
export {};
