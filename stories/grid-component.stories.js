import { html } from 'lit';
import '../packages/grid/dist/pr-grid.js';
import { columns } from './gridData/columns.js';
import { contacts } from './gridData/contacts.js';
import { defaultStoryLayout } from './story-helpers.js';

const menuItems = [
  {
    label: 'Download CSV',
    name: 'download-csv',
    onClick: name => {
      console.log(name);
    },
  },
  {
    label: 'Download PDF',
    name: 'download-pdf',
    onClick: name => {
      console.log(name);
    },
  },
];

export default {
  title: 'Praval/pr-grid',
  component: 'pr-grid',
  enableShortcuts: false,
  tags: ['autodocs'],
  decorators: [defaultStoryLayout], // Add custom styling around the story
  argTypes: {
    hideHeader: { control: 'boolean', default: false },
    showDownload: { control: 'boolean', default: false },
    showDownloadMenu: { control: 'array', default: menuItems },
    rowLimit: { type: 'number', min: 1, max: 30, step: 2 },
    headerTitle: { control: 'text', default: '' },
    columnReorderingAllowed: { control: 'boolean', default: false },
    refreshDataOnColumnVisibilityChange: { control: 'boolean', default: false },
    showAddButton: { control: 'boolean', default: false },
    disableAddButton: { control: 'boolean', default: false },
    addButtonLabel: { control: 'text', default: 'Add' },
    onAddButtonClick: { action: 'onAddButtonClick' },
    showRemoveAllButton: { control: 'boolean', default: false },
    disableRemoveAllButton: { control: 'boolean', default: false },
    removeAllButtonLabel: { control: 'text', default: 'Remove All' },
    onRemoveAllButtonClick: { action: 'onRemoveAllButtonClick' },
  },
};

const Template = ({
  hideHeader,
  rowLimit = 0,
  downloadMenuItems = menuItems,
  showDownload = false,
  headerTitle = 'Table header',
  columnReorderingAllowed = false,
  refreshDataOnColumnVisibilityChange = false,
  showAddButton = false,
  disableAddButton = false,
  addButtonLabel = 'Add',
  onAddButtonClick = () => {},
  showRemoveAllButton = false,
  disableRemoveAllButton = false,
  removeAllButtonLabel = 'Remove All',
  onRemoveAllButtonClick = () => {},
}) => html`
  <pr-grid
    .columns=${columns}
    .rows=${contacts}
    .hideHeader=${hideHeader}
    .rowLimit=${rowLimit}
    .showDownload=${showDownload}
    .downloadMenuItems=${downloadMenuItems}
    .localStorageID=${'pr-grid-local-storage'}
    .columnReorderingAllowed=${columnReorderingAllowed}
    .refreshDataOnColumnVisibilityChange=${refreshDataOnColumnVisibilityChange}
    .showAddButton=${showAddButton}
    .disableAddButton=${disableAddButton}
    .addButtonLabel=${addButtonLabel}
    .onAddButtonClick=${onAddButtonClick}
    .showRemoveAllButton=${showRemoveAllButton}
    .disableRemoveAllButton=${disableRemoveAllButton}
    .removeAllButtonLabel=${removeAllButtonLabel}
    .onRemoveAllButtonClick=${onRemoveAllButtonClick}
  >
    <div slot="header">
      <h3>${headerTitle}</h3>
    </div>
    <div slot="footer"></div>
  </pr-grid>
`;

export const Default = Template.bind({});
Default.args = {};
