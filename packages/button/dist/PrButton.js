var _a;
import { __decorate } from "tslib";
import { html, LitElement, isServer, nothing } from 'lit';
import { html as staticHtml, literal } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { spread } from '@open-wc/lit-helpers';
import { dispatchActivationClick, isActivationClick, } from '@material/web/internal/events/form-label-activation.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@material/web/button/text-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';
import { setupFormSubmitter, } from '@material/web/internal/controller/form-submitter.js';
import { internals } from '@material/web/labs/behaviors/element-internals.js';
export class PrButton extends LitElement {
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form;
    }
    set form(form) {
        this.setAttribute('form', form);
    }
    get buttonElement() {
        return this.shadowRoot
            ?.querySelector('.md-button')
            ?.shadowRoot?.querySelector('.button');
    }
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    focus() {
        this.buttonElement.focus();
    }
    blur() {
        this.buttonElement.blur();
    }
    constructor() {
        super();
        this.value = '';
        /** @private */
        this[_a] = this
            .attachInternals();
        this.type = 'submit';
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * Whether or not the button is submitting.
         */
        this.submitting = false;
        /**
         * The URL that the link button points to.
         */
        this.href = undefined;
        /**
         * Where to display the linked `href` URL for a link button.
         */
        this.target = '';
        /**
         * Whether to render the icon at the inline end.
         */
        this.trailingIcon = false;
        /**
         * Whether to display the icon.
         */
        this.hasIcon = false;
        this.appearance = 'filled';
        this.handleActivationClick = (event) => {
            if (!isActivationClick(event) || !this.buttonElement) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.buttonElement);
        };
        this.tags = {
            elevated: literal `md-elevated-button`,
            filled: literal `md-filled-button`,
            'filled-tonal': literal `md-filled-tonal-button`,
            outlined: literal `md-outlined-button`,
            text: literal `md-text-button`,
        };
        if (!isServer) {
            this.addEventListener('click', this.handleActivationClick);
        }
    }
    /** Replacement for AriaForwardMixin */
    get ariaAttributes() {
        const ariaAttrs = {};
        for (const attr of this.getAttributeNames()) {
            if (attr.startsWith('aria-')) {
                ariaAttrs[attr] = this.getAttribute(attr) || '';
            }
        }
        return ariaAttrs;
    }
    render() {
        if (this.appearance === 'anchor') {
            return html `<a
        target=${ifDefined(this.target)}
        href=${ifDefined(this.href)}
        ${spread(this.ariaAttributes)}
        >${this.value ? this.value : nothing}<slot></slot
      ></a>`;
        }
        const tag = this.tags?.[this.appearance] || this.tags.outlined;
        return staticHtml `
    <${tag}
      ?disabled=${this.disabled || this.submitting}
      target=${ifDefined(this.target)}
      href=${ifDefined(this.href)}
      ?trailing-icon=${this.trailingIcon}
      ?has-icon=${this.hasIcon}
      value="${this.value}"
      type=${this.type}
      class="md-button"
      ${spread(this.ariaAttributes)}
    >
      <div class="slot-wrap">
        ${this.submitting
            ? html `<md-circular-progress indeterminate></md-circular-progress>`
            : html `<slot></slot>`}
      </div>
      ${this.hasIcon ? html `<slot slot="icon" name="icon"></slot>` : nothing}
    </${tag}>`;
    }
}
_a = internals;
(() => {
    setupFormSubmitter(PrButton);
})();
/** @nocollapse */
PrButton.formAssociated = true;
/** @nocollapse */
PrButton.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
__decorate([
    property()
], PrButton.prototype, "value", void 0);
__decorate([
    property()
], PrButton.prototype, "type", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PrButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PrButton.prototype, "submitting", void 0);
__decorate([
    property()
], PrButton.prototype, "href", void 0);
__decorate([
    property()
], PrButton.prototype, "target", void 0);
__decorate([
    property({ type: Boolean, attribute: 'trailing-icon' })
], PrButton.prototype, "trailingIcon", void 0);
__decorate([
    property({ type: Boolean, attribute: 'has-icon' })
], PrButton.prototype, "hasIcon", void 0);
__decorate([
    property()
], PrButton.prototype, "appearance", void 0);
