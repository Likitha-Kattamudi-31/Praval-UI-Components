import React from "react";
import { createComponent } from "@lit/react";
import { PrTree as LitComp } from "../pr-tree.js";
import { PrTreeNode } from "../pr-tree-node.js";   // 👈 add this

// Register pr-tree
if (!customElements.get("pr-tree")) {
  customElements.define("pr-tree", LitComp);
}

// Register pr-tree-node
if (!customElements.get("pr-tree-node")) {
  customElements.define("pr-tree-node", PrTreeNode);
}

export const PrTree = createComponent({
  tagName: "pr-tree",
  elementClass: LitComp,
  react: React,
  events: {
    onTreeNodeSelected: "on-tree-node-selected",
    onTreeNodeChecked: "on-tree-node-checked",
    onTreeNodeExpandToggle: "on-tree-node-expand-toggle"
  }
});