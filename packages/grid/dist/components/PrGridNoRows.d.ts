import { LitElement } from 'lit';
export declare class PrGridNoRows extends LitElement {
    static styles: import("lit").CSSResult;
    type: 'warning' | 'info' | 'error';
    icon: string;
    message: string;
    iconFontSize: string;
    render(): import("lit-html").TemplateResult<1>;
}
