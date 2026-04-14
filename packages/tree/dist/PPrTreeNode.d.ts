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
