import { LitElement } from 'lit';
import '@material/web/button/text-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';
import { FormSubmitter, FormSubmitterType } from '@material/web/internal/controller/form-submitter.js';
import { internals } from '@material/web/labs/behaviors/element-internals.js';
export declare class PrButton extends LitElement implements FormSubmitter {
    /** @nocollapse */
    static readonly formAssociated = true;
    /** @nocollapse */
    static shadowRootOptions: ShadowRootInit;
    /**
     * The associated form element with which this element's value will submit.
     */
    get form(): HTMLFormElement | null;
    set form(form: HTMLFormElement | null);
    get buttonElement(): HTMLElement;
    get name(): string;
    set name(name: string);
    value: string;
    /** @private */
    [internals]: ElementInternals;
    focus(): void;
    blur(): void;
    type: FormSubmitterType;
    /**
     * Whether or not the button is disabled.
     */
    disabled: boolean;
    /**
     * Whether or not the button is submitting.
     */
    submitting: boolean;
    /**
     * The URL that the link button points to.
     */
    href: string | undefined;
    /**
     * Where to display the linked `href` URL for a link button.
     */
    target: '_blank' | '_parent' | '_self' | '_top' | '';
    /**
     * Whether to render the icon at the inline end.
     */
    trailingIcon: boolean;
    /**
     * Whether to display the icon.
     */
    hasIcon: boolean;
    appearance: 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text' | 'anchor';
    constructor();
    private readonly handleActivationClick;
    private readonly tags;
    /** Replacement for AriaForwardMixin */
    private get ariaAttributes();
    protected render(): import("lit-html").TemplateResult<1 | 2 | 3>;
}
