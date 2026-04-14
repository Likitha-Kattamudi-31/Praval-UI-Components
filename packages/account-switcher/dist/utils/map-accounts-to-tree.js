// TODO: Should use correctly typed definition rather than any
export const mapAccountToTreeNode = (account, parentNode, filterString) => {
    const label = account.displayName ?? account.name;
    const treeNode = {
        expanded: false,
        id: account.id,
        label,
        parentId: parentNode.id,
    };
    if (filterString && filterString.length > 2) {
        treeNode.expanded = account.subaccounts?.some((child) => child.displayName.toLowerCase().includes(filterString.toLowerCase()));
    }
    treeNode.children = account.subaccounts?.map((childAccount) => mapAccountToTreeNode(childAccount, treeNode, filterString));
    // If any child node is expanded, set the parent node as expanded
    // to reveal matching nested child nodes
    const expandedChild = treeNode.children?.some((child) => child.expanded);
    if (expandedChild) {
        treeNode.expanded = true;
    }
    return treeNode;
};
export const mapAccountsToTreeNode = (accounts, filterString) => {
    const rootNode = {
        expanded: true,
        id: 'root',
        label: '',
        parentId: undefined,
    };
    rootNode.children = accounts.map(account => mapAccountToTreeNode(account, rootNode, filterString));
    return rootNode;
};
