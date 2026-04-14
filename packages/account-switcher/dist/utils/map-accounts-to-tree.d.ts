import { PPrTreeNode } from '../types';
export interface IAccount {
    accountNumber?: string;
    parentAccountNumber?: string | null;
    name?: string;
}
export declare const mapAccountToTreeNode: (account: any, parentNode: PPrTreeNode, filterString?: string) => PPrTreeNode;
export declare const mapAccountsToTreeNode: (accounts: Array<IAccount>, filterString?: string) => PPrTreeNode;
