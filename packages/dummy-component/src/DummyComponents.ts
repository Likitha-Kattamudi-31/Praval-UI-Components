import { html, LitElement, css, nothing, isServer } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { spread } from '@open-wc/lit-helpers';

export class DummyComponent extends LitElement {
  static styles = css`
    .card {
      padding: 16px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      background: white;
      transition: 0.2s;
    }

    .card.highlight {
      border-color: #2563eb;
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    .title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  `;

  @property() title = "Dummy Card";

  @property({ type: Boolean, reflect: true })
  highlight = false;

  @property()
  link?: string;

  @state()
  private clicks = 0;

  constructor() {
    super();

    if (!isServer) {
      this.addEventListener("click", () => this.handleClick());
    }
  }

  private log(msg: string) {
    console.log('[DummyComponent]', msg);
  }

  private handleClick() {
    this.clicks++;
    this.log(`clicked ${this.clicks} times`);
  }

  private get classes() {
    return {
      card: true,
      highlight: this.highlight
    };
  }

  render() {
    return html`
      <div
        class=${classMap(this.classes)}
      data-clicks=${this.clicks}
      >
        <div class="title">${this.title}</div>

        <slot></slot>

        ${this.link
          ? html`<a href=${ifDefined(this.link)}>Open Link</a>`
          : nothing}
      </div>
    `;
  }
}
