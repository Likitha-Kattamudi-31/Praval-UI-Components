import { __decorate } from "tslib";
import { html, LitElement, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import '@praval/prvl-icon-component/pr-icon.js';
import { PrTreeStyles } from './pr-tree-styles.js';
export class PrTreeNode extends LitElement {
    constructor() {
        super(...arguments);
        this.isActiveTreeNode = false;
        this.isExpanded = false;
        this.isSelected = false;
        this.level = 0;
        this.checkboxEnabled = false;
        this.appearance = 'default';
        this.hasIcon = false;
        this.removeChevron = false;
        this.allowMultiLine = false;
        this.scrollToActive = false;
        this.disabled = false;
        this.selectNodeOnClick = false;
        this._hasScrolledToActive = false;
    }
    hasChildren() {
        return this.node.children !== undefined && this.node.children.length > 0;
    }
    getChevron() {
        return html `<div
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
    renderCheckbox() {
        if (this.node.disabled) {
            return html ` <span class="inherited" style={{fontSize:22}} aria-hidden="true">▴</span>`;
        }
        return html `<input
       label=""
  type="checkbox"
  class="item-checkbox"
  .checked=${this.node.checked}
  @click=${() => this.onNodeCheck(this.node)}
  .indeterminate=${this.node.indeterminate}
/>`;
    }
    onNodeClick(node) {
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
    onNodeToggle(node) {
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
    onNodeCheck(node) {
        /* eslint-disable no-param-reassign */
        if (node.checked) {
            node.checked = false;
            node.indeterminate = false;
        }
        else {
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
    handleNodeClick(node) {
        if (this.disabled || node.disabled) {
            return;
        }
        if (this.selectNodeOnClick) {
            this.onNodeCheck(node);
            return;
        }
        if (this.checkboxEnabled) {
            this.onNodeToggle(node);
        }
        else {
            this.onNodeClick(node);
        }
    }
    render() {
        const selectedClass = this.isSelected ? 'selected' : '';
        const isDisabled = this.disabled || this.node.disabled;
        const disabledClass = isDisabled ? 'disabled' : '';
        const cursorClass = isDisabled ? 'cursor-default' : 'cursor-pointer';
        const icon = this.node.icon ? this.node.icon : 'account_box';
        return html `<div
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
            ? html `<pr-icon class="icon" 
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
    updated() {
        var _a;
        if (this.scrollToActive && !this._hasScrolledToActive) {
            const el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('[active-tree-node]');
            el === null || el === void 0 ? void 0 : el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this._hasScrolledToActive = true;
        }
        if (this.isSelected) {
            this.dispatchEvent(new CustomEvent('selected-node-ref', {
                detail: this._treeNodeContainer,
                bubbles: true,
                composed: true,
            }));
        }
    }
}
PrTreeNode.styles = [PrTreeStyles];
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "isActiveTreeNode", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "isExpanded", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "isSelected", void 0);
__decorate([
    property({ type: Number })
], PrTreeNode.prototype, "level", void 0);
__decorate([
    property({ type: Object })
], PrTreeNode.prototype, "node", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "checkboxEnabled", void 0);
__decorate([
    property({ type: String })
], PrTreeNode.prototype, "appearance", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "hasIcon", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "removeChevron", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "allowMultiLine", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "scrollToActive", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], PrTreeNode.prototype, "selectNodeOnClick", void 0);
__decorate([
    state()
], PrTreeNode.prototype, "_hasScrolledToActive", void 0);
__decorate([
    query('.tree-node-container')
], PrTreeNode.prototype, "_treeNodeContainer", void 0);
//# sourceMappingURL=PrTreeNode.js.map