import { __decorate } from "tslib";
import { nothing, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { findChildNodeById, updateNodeCheckedStatus } from './tree-utils.js';
import { PrTreeStyles } from './pr-tree-styles.js';
import './pr-tree-node.js';
export class PrTree extends LitElement {
    constructor() {
        super(...arguments);
        this.ariaLabel = 'tree';
        this.selectedNodeId = '';
        this.checkboxesEnabled = false;
        this.appearance = 'default';
        this.hasIcons = false;
        this.removeChevron = false;
        this.allowMultiLine = false;
        this.rollup = true;
        this.selectNodeOnClick = false;
        this._activeItemId = '';
        this._selectedNodeId = '';
    }
    connectedCallback() {
        super.connectedCallback();
        this._activeItemId = this.selectedNodeId; // store in state
        this._selectedNodeId = this.selectedNodeId; // store in state
        // console.log("rootNode inside tree", this.rootNode);
        this._rootNode = this.rootNode;
    }
    onTreeNodeClick(e) {
        this.dispatchEvent(new CustomEvent('on-tree-node-selected', {
            detail: {
                message: e.detail.message,
            },
        }));
        this._selectedNodeId = e.detail.message.id;
    }
    dispatchTreeNodeExpandToggle(e) {
        this.dispatchEvent(new CustomEvent('on-tree-node-expand-toggle', {
            detail: {
                message: e.detail.message,
            },
        }));
    }
    onTreeNodeToggle(e) {
        const newRootNode = { ...this._rootNode };
        const { node } = e.detail.message;
        node.expanded = !node.expanded;
        this.rootNode = newRootNode;
        this._activeItemId = node.id;
        this.dispatchTreeNodeExpandToggle(e);
    }
    onTreeNodeCheck(e) {
        const { node } = e.detail.message;
        updateNodeCheckedStatus(node, this._rootNode, this.rollup);
        this._rootNode = structuredClone(this._rootNode);
        this.rootNode = this._rootNode;
        this.dispatchEvent(new CustomEvent('on-tree-node-checked', {
            detail: {
                message: e.detail.message,
            },
        }));
    }
    renderNodes(nodes = [], level = 0) {
        const renderedNodes = [];
        for (const node of nodes) {
            const renderedNode = html `<pr-tree-node
        .level=${level}
        .node=${node}
        .appearance=${this.appearance}
        .selectNodeOnClick=${this.selectNodeOnClick}
        ?isActiveTreeNode=${this._activeItemId === node.id}
        ?isExpanded=${!!node.expanded}
        ?isSelected=${this._selectedNodeId === node.id}
        ?checkboxEnabled=${this.checkboxesEnabled}
        ?hasIcon=${this.hasIcons}
        ?removeChevron=${this.removeChevron}
        ?allowMultiLine=${this.allowMultiLine}
        ?disabled=${!!node.disabled}
        @on-tree-node-click=${this.onTreeNodeClick}
        @on-tree-node-toggle=${this.onTreeNodeToggle}
        @on-tree-node-check=${this.onTreeNodeCheck}
      >
        ${node.expanded ? this.renderNodes(node.children, level + 1) : nothing}
      </pr-tree-node>`;
            renderedNodes.push(renderedNode);
        }
        return renderedNodes;
    }
    /**
     * Expand the active tree node and all of its parent nodes.
     */
    expandActiveTreeNode() {
        const nodeToSelect = findChildNodeById(this._rootNode, this._activeItemId) || this._rootNode;
        let iteration = 0;
        const MAX_ITERATIONS = 1000;
        if (!nodeToSelect.parentId) {
            return;
        }
        let node = findChildNodeById(this._rootNode, nodeToSelect.parentId);
        while (node && iteration < MAX_ITERATIONS) {
            node.expanded = true;
            if (!node.parentId) {
                break;
            }
            node = findChildNodeById(this._rootNode, node.parentId);
            iteration += 1;
        }
    }
    render() {
        this.expandActiveTreeNode();
        return html `<div
      aria-label=${this.ariaLabel}
      class="pr-tree-container"
      role="tree"
    >
      ${this.renderNodes(this._rootNode.children, 0)}
    </div>`;
    }
}
PrTree.styles = [PrTreeStyles];
__decorate([
    property({ type: String })
], PrTree.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Object })
], PrTree.prototype, "rootNode", void 0);
__decorate([
    property({ type: String })
], PrTree.prototype, "selectedNodeId", void 0);
__decorate([
    property({ type: Boolean })
], PrTree.prototype, "checkboxesEnabled", void 0);
__decorate([
    property({ type: String })
], PrTree.prototype, "appearance", void 0);
__decorate([
    property({ type: Boolean })
], PrTree.prototype, "hasIcons", void 0);
__decorate([
    property({ type: Boolean })
], PrTree.prototype, "removeChevron", void 0);
__decorate([
    property({ type: Boolean })
], PrTree.prototype, "allowMultiLine", void 0);
__decorate([
    property({ type: Boolean })
], PrTree.prototype, "rollup", void 0);
__decorate([
    property({ type: Boolean })
], PrTree.prototype, "selectNodeOnClick", void 0);
__decorate([
    state()
], PrTree.prototype, "_activeItemId", void 0);
__decorate([
    state()
], PrTree.prototype, "_rootNode", void 0);
__decorate([
    state()
], PrTree.prototype, "_selectedNodeId", void 0);
//# sourceMappingURL=PrTree.js.map