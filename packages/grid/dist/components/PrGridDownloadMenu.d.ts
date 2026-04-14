import { LitElement } from 'lit';
import { PrGridDownloadMenuItemModel } from '../models/PrGridDownloadMenuItemModel.js';
export declare class PrGridDownloadMenu extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    items: PrGridDownloadMenuItemModel[];
    isDownloading: boolean;
    private open;
    toggleMenu(): void;
    closeMenu(): void;
    dispatchDownload(type: string): void;
    renderMenuItems(): import("lit-html").TemplateResult<1> | import("lit-html").TemplateResult<1>[];
    render(): import("lit-html").TemplateResult<1>;
}
