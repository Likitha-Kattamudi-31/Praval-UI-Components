import { html, LitElement, nothing, TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import '@praval/prvl-icon-component/pr-icon.js';
// import '@praval/prvl-icon-component/pr-icon.js'
import { PPrTreeNode } from './PPrTreeNode.js';
import { PrTreeStyles } from './pr-tree-styles.js';
import { Appearance } from './PrTree.js';

export class PrTreeNode extends LitElement {
  static readonly styles = [PrTreeStyles];

  @property({ type: Boolean }) isActiveTreeNode: boolean = false;

  @property({ type: Boolean }) isExpanded: boolean = false;

  @property({ type: Boolean }) isSelected: boolean = false;

  @property({ type: Number }) level: number = 0;

  @property({ type: Object }) node!: PPrTreeNode;

  @property({ type: Boolean }) checkboxEnabled: boolean = false;

  @property({ type: String }) appearance: Appearance = 'default';

  @property({ type: Boolean }) hasIcon: boolean = false;

  @property({ type: Boolean }) removeChevron: boolean = false;

  @property({ type: Boolean }) allowMultiLine: boolean = false;

  @property({ type: Boolean }) scrollToActive: boolean = false;

  @property({ type: Boolean }) disabled: boolean = false;

  @property({ type: Boolean }) selectNodeOnClick: boolean = false;

  @state() private _hasScrolledToActive: boolean = false;

  @query('.tree-node-container') private _treeNodeContainer!: HTMLElement;

  private hasChildren() {
    return this.node.children !== undefined && this.node.children.length > 0;
  }

  private getChevron(): TemplateResult<1> | typeof nothing {
    return html`<div
      style=${`${this.hasChildren() ? '' : 'visibility:hidden'}`}
    >
  <button
  class="chevron"
  @click=${() => this.onNodeToggle(this.node)}
  aria-label="Toggle node"
>
  ${this.isExpanded ? '▾' : '▸'}
</button>
    </div>`;
  }

  private renderCheckbox() {
    if (this.node.disabled) {
      return html` <span class="inherited" style={{fontSize:22}} aria-hidden="true">▴</span>`;
    }

    return html`<input
       label=""
  type="checkbox"
  class="item-checkbox"
  .checked=${this.node.checked}
  @click=${() => this.onNodeCheck(this.node)}
  .indeterminate=${this.node.indeterminate}
/>`;
  }

  private onNodeClick(node: PPrTreeNode): void {
    const event = new CustomEvent('on-tree-node-click', {
      detail: {
        message: {
          node,
          id: node.id,
          label: node.label,
          parentId: node.parentId,
        },
      },
    });

    this.dispatchEvent(event);
  }

  private onNodeToggle(node: PPrTreeNode): void {
    const event = new CustomEvent('on-tree-node-toggle', {
      detail: {
        message: {
          node,
          id: node.id,
          label: node.label,
          parentId: node.parentId,
        },
      },
    });

    this.dispatchEvent(event);
  }

  private onNodeCheck(node: PPrTreeNode): void {
    /* eslint-disable no-param-reassign */
    if (node.checked) {
      node.checked = false;
      node.indeterminate = false;
    } else {
      node.checked = true;
      node.indeterminate = false;
    }
    const event = new CustomEvent('on-tree-node-check', {
      detail: {
        message: {
          node,
          id: node.id,
        },
      },
    });

    this.dispatchEvent(event);
  }

  private handleNodeClick(node: PPrTreeNode): void {
    if (this.disabled || node.disabled) {
      return;
    }

    if (this.selectNodeOnClick) {
      this.onNodeCheck(node);
      return;
    }

    if (this.checkboxEnabled) {
      this.onNodeToggle(node);
    } else {
      this.onNodeClick(node);
    }
  }

  protected render(): TemplateResult<1> {
    const selectedClass = this.isSelected ? 'selected' : '';
    const isDisabled = this.disabled || this.node.disabled;
    const disabledClass = isDisabled ? 'disabled' : '';
    const cursorClass = isDisabled ? 'cursor-default' : 'cursor-pointer';
    const icon = this.node.icon ? this.node.icon : 'account_box';

    return html`<div
      class="tree-node-container"
      ?active-tree-node=${this.isActiveTreeNode}
      aria-expanded=${!!this.node.expanded}
      aria-selected=${this.isSelected}
      aria-disabled=${isDisabled}
      data-id=${this.node.id}
      role="treeitem"
    >
      <div
        class="wrapper ${selectedClass} ${cursorClass} ${disabledClass}"
        style="padding-left: calc(var(--pr-tree-icon-size) * ${this.level})"
      >
        ${!this.removeChevron ? this.getChevron() : nothing}
        ${this.checkboxEnabled ? this.renderCheckbox() : nothing}
        ${this.hasIcon
          ? html`<pr-icon class="icon" 
              >${icon}</pr-icon
            >`
          : nothing}
        <div
          class="label ${this.allowMultiLine
            ? 'label-multi-line'
            : 'label-single-line'}"
          @click=${() => this.handleNodeClick(this.node)}
          @keyup=${() => this.handleNodeClick(this.node)}
        >
          ${this.node.label}
        </div>
      </div>
      <slot></slot>
    </div>`;
  }

  protected updated(): void {
    if (this.scrollToActive && !this._hasScrolledToActive) {
      const el = this.shadowRoot?.querySelector('[active-tree-node]');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this._hasScrolledToActive = true;
    }
    if (this.isSelected) {
      this.dispatchEvent(
        new CustomEvent('selected-node-ref', {
          detail: this._treeNodeContainer,
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
