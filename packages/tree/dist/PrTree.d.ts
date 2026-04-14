import { LitElement, TemplateResult } from 'lit';
import { PPrTreeNode } from './PPrTreeNode.js';
import './pr-tree-node.js';
export type Appearance = 'filled' | 'filled-tonal' | 'outlined' | 'default';
export declare class PrTree extends LitElement {
    static readonly styles: import("lit").CSSResult[];
    connectedCallback(): void;
    ariaLabel: string;
    rootNode: PPrTreeNode;
    selectedNodeId: string;
    checkboxesEnabled: boolean;
    appearance: Appearance;
    hasIcons: boolean;
    removeChevron: boolean;
    allowMultiLine: boolean;
    rollup: boolean;
    selectNodeOnClick: boolean;
    private _activeItemId;
    private _rootNode;
    private _selectedNodeId;
    private onTreeNodeClick;
    private dispatchTreeNodeExpandToggle;
    private onTreeNodeToggle;
    private onTreeNodeCheck;
    private renderNodes;
    /**
     * Expand the active tree node and all of its parent nodes.
     */
    private expandActiveTreeNode;
    protected render(): TemplateResult<1>;
}
