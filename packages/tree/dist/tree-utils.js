export function findChildNodeById(node, id) {
    if (node.id === id) {
        return node;
    }
    if (!node.children) {
        return null;
    }
    for (const childNode of node.children) {
        const foundNode = findChildNodeById(childNode, id);
        if (foundNode) {
            return foundNode;
        }
    }
    return null;
}
export function updateNodeCheckedStatus(node, rootNode, rollup = true) {
    /* eslint-disable no-param-reassign */
    function updateChildren(n, checked = false) {
        n.checked = checked;
        n.indeterminate = false;
        if (n.children) {
            n.children.forEach(child => {
                child.disabled = n.checked;
                updateChildren(child, checked);
            });
        }
    }
    function updateParents(n) {
        if (n.parentId) {
            const currentParent = findChildNodeById(rootNode, n.parentId);
            if (currentParent && currentParent.children) {
                if (currentParent.children.every(child => child.checked) && rollup) {
                    currentParent.checked = true;
                    currentParent.indeterminate = false;
                }
                else if (currentParent.children.some(child => child.checked)) {
                    currentParent.checked = false;
                    currentParent.indeterminate = true;
                }
                else if (currentParent.children.some(c => c.indeterminate)) {
                    currentParent.checked = false;
                    currentParent.indeterminate = true;
                }
                else {
                    currentParent.checked = false;
                    currentParent.indeterminate = false;
                }
                updateParents(currentParent);
            }
        }
    }
    // update all children to match current node checked status
    updateChildren(node, node.checked);
    // update all parents checked and indeterminate status
    updateParents(node);
}
//# sourceMappingURL=tree-utils.js.map