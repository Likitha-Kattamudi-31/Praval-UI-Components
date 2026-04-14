import { LitElement } from 'lit';
export interface PGridNavButton {
    testId?: string;
    path?: string;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    text: string;
}
export declare class PrGridNavigation extends LitElement {
    buttons: PGridNavButton[];
    static styles: import("lit").CSSResult;
    renderButton: ({ path, text, onClick, testId, disabled, selected, }: PGridNavButton) => import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
