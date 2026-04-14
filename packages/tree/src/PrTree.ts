import { nothing, html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { findChildNodeById, updateNodeCheckedStatus } from './tree-utils.js';
import { PPrTreeNode } from './PPrTreeNode.js';
import { PrTreeStyles } from './pr-tree-styles.js';
import './pr-tree-node.js';

export type Appearance = 'filled' | 'filled-tonal' | 'outlined' | 'default';

export class PrTree extends LitElement {
  static readonly styles = [PrTreeStyles];

  connectedCallback() {
    super.connectedCallback();
    this._activeItemId = this.selectedNodeId; // store in state
    this._selectedNodeId = this.selectedNodeId; // store in state
    // console.log("rootNode inside tree", this.rootNode);
    this._rootNode = this.rootNode;
  }

  @property({ type: String }) ariaLabel: string = 'tree';

  @property({ type: Object }) rootNode!: PPrTreeNode;

  @property({ type: String }) selectedNodeId: string = '';

  @property({ type: Boolean }) checkboxesEnabled: boolean = false;

  @property({ type: String }) appearance: Appearance = 'default';

  @property({ type: Boolean }) hasIcons: boolean = false;

  @property({ type: Boolean }) removeChevron: boolean = false;

  @property({ type: Boolean }) allowMultiLine: boolean = false;

  @property({ type: Boolean }) rollup: boolean = true;

  @property({ type: Boolean }) selectNodeOnClick: boolean = false;

  @state() private _activeItemId: string = '';

  @state() private _rootNode!: PPrTreeNode;

  @state() private _selectedNodeId: string = '';

  private onTreeNodeClick(e: CustomEvent): void {
    this.dispatchEvent(
      new CustomEvent('on-tree-node-selected', {
        detail: {
          message: e.detail.message,
        },
      })
    );

    this._selectedNodeId = e.detail.message.id;
  }

  private dispatchTreeNodeExpandToggle(e: CustomEvent): void {
    this.dispatchEvent(
      new CustomEvent('on-tree-node-expand-toggle', {
        detail: {
          message: e.detail.message,
        },
      })
    );
  }

  private onTreeNodeToggle(e: CustomEvent): void {
    const newRootNode = { ...this._rootNode };
    const { node } = e.detail.message;
    node.expanded = !node.expanded;
    this.rootNode = newRootNode;
    this._activeItemId = node.id;
    this.dispatchTreeNodeExpandToggle(e);
  }

  private onTreeNodeCheck(e: CustomEvent): void {
    const { node } = e.detail.message;
    updateNodeCheckedStatus(node, this._rootNode, this.rollup);
    this._rootNode = structuredClone(this._rootNode);
    this.rootNode = this._rootNode;
    this.dispatchEvent(
      new CustomEvent('on-tree-node-checked', {
        detail: {
          message: e.detail.message,
        },
      })
    );
  }

  private renderNodes(
    nodes: Array<PPrTreeNode> = [],
    level: number = 0
  ): Array<TemplateResult<1>> {
    const renderedNodes: Array<TemplateResult<1>> = [];

    for (const node of nodes) {
      const renderedNode = html`<pr-tree-node
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
  private expandActiveTreeNode(): void {
    const nodeToSelect =
      findChildNodeById(this._rootNode, this._activeItemId) || this._rootNode;

    let iteration = 0;
    const MAX_ITERATIONS = 1000;
    if (!nodeToSelect.parentId) {
      return;
    }
    let node: PPrTreeNode | null = findChildNodeById(
      this._rootNode,
      nodeToSelect.parentId
    );
    while (node && iteration < MAX_ITERATIONS) {
      node.expanded = true;
      if (!node.parentId) {
        break;
      }
      node = findChildNodeById(this._rootNode, node.parentId);
      iteration += 1;
    }
  }

  protected render(): TemplateResult<1> {
    this.expandActiveTreeNode();

    return html`<div
      aria-label=${this.ariaLabel}
      class="pr-tree-container"
      role="tree"
    >
      ${this.renderNodes(this._rootNode.children, 0)}
    </div>`;
  }
}
