export interface IAccount {
  accountNumber?: string;
  parentAccountNumber?: string | null;
  name?: string;
}

export interface Account {
  account_number?: string;
  parent_account_number?: string | null;
  name?: string;
}

export interface NestedAccounts {
  id: string;
  name: string;
  status: string;
  accountNumber: string;
  displayName?: string;
  subaccounts?: NestedAccounts[];
}

export interface IContactInputAccountsInner {
  id: string;
  name: string;
  status: string;
  accountNumber?: string;
  statusUpdateAt?: string;
  statusUpdateBy?: string;
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  evacAssistance: boolean;
  accounts: Array<IContactInputAccountsInner>;
  status?: string;
}

export type UserPermission = {
  permissionName: string;
  privilege: string;
};

export type AccountPermission = {
  accountNumber: string;
  permissions: UserPermission[];
};
export interface PPrTreeNode {
  children?: Array<PPrTreeNode>;
  expanded?: boolean;
  icon?: string;
  id: string;
  label: string;
  parentId?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
}

export interface IAccount {
  accountNumber?: string;
  parentAccountNumber?: string | null;
  name?: string;
}