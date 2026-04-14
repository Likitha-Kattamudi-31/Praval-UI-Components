import { html, LitElement, isServer, nothing } from 'lit';
import { html as staticHtml, StaticValue, literal } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { spread } from '@open-wc/lit-helpers';
import {
  dispatchActivationClick,
  isActivationClick,
} from '@material/web/internal/events/form-label-activation.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@material/web/button/text-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/icon/icon.js';
import '@material/web/progress/circular-progress.js';

import {
  FormSubmitter,
  FormSubmitterType,
  setupFormSubmitter,
} from '@material/web/internal/controller/form-submitter.js';

import { internals } from '@material/web/labs/behaviors/element-internals.js';


export class PrButton extends LitElement implements FormSubmitter {

  static {
    setupFormSubmitter(PrButton);
  }

  /** @nocollapse */
  static readonly formAssociated = true;

  /** @nocollapse */
  static override shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  };

  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[internals].form;
  }

  set form(form: HTMLFormElement | null) {
    this.setAttribute('form', form as unknown as string);
  }

  get buttonElement(): HTMLElement {
    return this.shadowRoot
      ?.querySelector('.md-button')
      ?.shadowRoot?.querySelector('.button')!;
  }

  get name() {
    return this.getAttribute('name') ?? '';
  }

  set name(name: string) {
    this.setAttribute('name', name);
  }

  @property() value = '';

  /** @private */
  [internals] = (this as HTMLElement)
    .attachInternals();

  override focus() {
    this.buttonElement.focus();
  }

  override blur() {
    this.buttonElement.blur();
  }

  @property() type: FormSubmitterType = 'submit';

  /**
   * Whether or not the button is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Whether or not the button is submitting.
   */
  @property({ type: Boolean, reflect: true }) submitting = false;

  /**
   * The URL that the link button points to.
   */
  @property() href: string | undefined = undefined;

  /**
   * Where to display the linked `href` URL for a link button.
   */
  @property() target: '_blank' | '_parent' | '_self' | '_top' | '' = '';

  /**
   * Whether to render the icon at the inline end.
   */
  @property({ type: Boolean, attribute: 'trailing-icon' }) trailingIcon = false;

  /**
   * Whether to display the icon.
   */
  @property({ type: Boolean, attribute: 'has-icon' }) hasIcon = false;

  @property()
  appearance:
    | 'elevated'
    | 'filled'
    | 'filled-tonal'
    | 'outlined'
    | 'text'
    | 'anchor' = 'filled';

  constructor() {
    super();
    if (!isServer) {
      this.addEventListener('click', this.handleActivationClick);
    }
  }

  private readonly handleActivationClick = (event: MouseEvent) => {
    if (!isActivationClick(event) || !this.buttonElement) {
      return;
    }
    this.focus();
    dispatchActivationClick(this.buttonElement);
  };

  private readonly tags = {
    elevated: literal`md-elevated-button`,
    filled: literal`md-filled-button`,
    'filled-tonal': literal`md-filled-tonal-button`,
    outlined: literal`md-outlined-button`,
    text: literal`md-text-button`,
  };

  /** Replacement for AriaForwardMixin */
  private get ariaAttributes() {
    const ariaAttrs: Record<string, string> = {};
    for (const attr of this.getAttributeNames()) {
      if (attr.startsWith('aria-')) {
        ariaAttrs[attr] = this.getAttribute(attr) || '';
      }
    }
    return ariaAttrs;
  }

  protected override render() {

    if (this.appearance === 'anchor') {
      return html`<a
        target=${ifDefined(this.target)}
        href=${ifDefined(this.href)}
        ${spread(this.ariaAttributes)}
        >${this.value ? this.value : nothing}<slot></slot
      ></a>`;
    }

    const tag: StaticValue = this.tags?.[this.appearance] || this.tags.outlined;

    return staticHtml`
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
        ${
          this.submitting
            ? html`<md-circular-progress indeterminate></md-circular-progress>`
            : html`<slot></slot>`
        }
      </div>
      ${this.hasIcon ? html`<slot slot="icon" name="icon"></slot>` : nothing}
    </${tag}>`;
  }
}