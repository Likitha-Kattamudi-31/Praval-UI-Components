import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import '@material/web/icon/icon.js';

export class PrIcon extends LitElement {
  @property({ type: Boolean , reflect: true}) filled = false;

  override connectedCallback() {
    super.connectedCallback();
    const ariaHidden = this.getAttribute('aria-hidden');
    if (ariaHidden === 'false') {
      // Allow the user to set `aria-hidden="false"` to create an icon that is
      // announced by screenreaders.
      this.removeAttribute('aria-hidden');
      return;
    }

    // Needed for VoiceOver, which will create a "group" if the element is a
    // sibling to other content.
    this.setAttribute('aria-hidden', 'true');
  }

  render() {
    return html`<md-icon ?filled=${this.filled}><slot></slot></md-icon>`;
  }
}
