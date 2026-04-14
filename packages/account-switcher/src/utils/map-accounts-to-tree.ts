import {PPrTreeNode} from '../types'
export interface IAccount {
  accountNumber?: string;
  parentAccountNumber?: string | null;
  name?: string;
} 

// TODO: Should use correctly typed definition rather than any
export const mapAccountToTreeNode = (
  account: any,
  parentNode: PPrTreeNode,
  filterString?: string
): PPrTreeNode => {
  const label = account.displayName ?? account.name;

  const treeNode: PPrTreeNode = {
    expanded: false,
    id: account.id,
    label,
    parentId: parentNode.id,
  };

  if (filterString && filterString.length > 2) {
    treeNode.expanded = account.subaccounts?.some((child: any) =>
      child.displayName.toLowerCase().includes(filterString.toLowerCase())
    );
  }

  treeNode.children = account.subaccounts?.map((childAccount: any) =>
    mapAccountToTreeNode(childAccount, treeNode, filterString)
  );

  // If any child node is expanded, set the parent node as expanded
  // to reveal matching nested child nodes
  const expandedChild = treeNode.children?.some((child: any) => child.expanded);

  if (expandedChild) {
    treeNode.expanded = true;
  }

  return treeNode;
};

export const mapAccountsToTreeNode = (
  accounts: Array<IAccount>,
  filterString?: string
): PPrTreeNode => {
  const rootNode: PPrTreeNode = {
    expanded: true,
    id: 'root',
    label: '',
    parentId: undefined,
  };

  rootNode.children = accounts.map(account =>
    mapAccountToTreeNode(account, rootNode, filterString)
  );

  return rootNode;
};
