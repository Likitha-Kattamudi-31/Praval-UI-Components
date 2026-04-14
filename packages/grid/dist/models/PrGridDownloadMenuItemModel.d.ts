export interface PrGridDownloadMenuItemModel {
    name: string;
    label: string;
    onClick: (name: string) => void;
    disabled?: boolean;
    hidden?: boolean;
}
