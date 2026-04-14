import { html } from 'lit';
import '../packages/tree/dist/pr-tree.js';
import { defaultStoryLayout } from './story-helpers.js';

export default {
  title: 'Praval/pr-tree',
  component: 'pr-tree',
  decorators: [defaultStoryLayout],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['filled', 'filled-tonal', 'outlined', 'default'],
    },
    rootNode: {
      control: 'object',
      description: `requires an empty root node: {id: 'root', label: '', children: []}. Populate the children array with objects like this {id: '1', label: 'my thing', children: [], parentId: 'root'}. The tree structure you pass will be updated every time the user checks a node`,
    },
    selectedNodeId: {
      control: 'text',
      description:
        'id of node that you would like to be selected once the pr-tree is loaded. If the selected node is several layers deep, pr-tree will iterate until it finds that node. Max of 1000 iterations',
    },
    checkboxesEnabled: {
      control: 'boolean',
      description: `if true, checkboxes will be rendered next to each node. Checking a node will update the tree structure and emit an 'on-tree-node-checked' event`,
      default: false,
    },
    hasIcons: {
      control: 'boolean',
      description: `if true, icons will be rendered next to each node. If you want to use icons, you must pass an icon name in the row object. The icon name must be a material icon name. For example, 'music_note'`,
      default: false,
    },
    removeChevron: {
      control: 'boolean',
      description: `if true, the chevron will be removed from the tree nodes. This is meant for a lone root node that has no children so that the node aligns properly with your content.`,
      default: false,
    },
    allowMultiLine: {
      control: 'boolean',
      description: `if true, node labels will break over multiple lines if required.`,
      default: false,
    },
    onTreeNodeChecked: {
      control: 'function',
      description: `callback function that is called when a node is checked or unchecked.`,
    },
    onTreeNodeSelected: {
      description: 'callback function that is called when a node is selected',
    },
    onTreeNodeExpandToggle: {
      description:
        'callback function that is called when a node is expanded or collapsed',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the tree component',
      },
    },
  },
};

const musicRows = [
  { id: '1', label: 'Orchestra', icon: 'music_note' },
  { id: '22', label: 'School', icon: 'school' },
  { id: '23', label: 'Class rooms', parentId: '22', icon: 'meeting_room' },
  { id: '24', label: 'Geography', parentId: '23', icon: 'location_on' },
  { id: '25', label: 'Science', parentId: '23', icon: 'labs' },
  { id: '2', label: 'Brass', parentId: '1', icon: 'switches' },
  { id: '3', label: 'Trombone', parentId: '2' },
  { id: '4', label: 'Contrabass', parentId: '3' },
  { id: '5', label: 'Conductor', parentId: '1', icon: 'woman' },
  { id: '6', label: 'Percussion', parentId: '1', icon: 'table_bar' },
  { id: '7', label: 'Bass Drum', parentId: '6' },
  { id: '8', label: 'Strings', parentId: '1', icon: 'gesture' },
  { id: '9', label: 'Violin', parentId: '8' },
  { id: '10', label: 'Five string violin', parentId: '9' },
  { id: '11', label: 'Five string violin (red)', parentId: '9' },
  { id: '12', label: 'Woodwind', parentId: '1', icon: 'air' },
  { id: '13', label: 'Flute', parentId: '12', icon: 'page_control' },
  { id: '14', label: 'Oboe', parentId: '12', icon: 'priority_high' },
  { id: '100', label: 'Childless top node' },
];

const accountRows = [
  { id: '1', label: '[123456] Test Company One' },
  { id: '22', label: '[123456-A] Test Company One (FR)', parentId: '1' },
  {
    id: '23',
    label:
      '[123456-A-1] Test Company One (FR): 38 Rue Philippe de Lassalle, 69004 Lyon, France',
    parentId: '22',
  },
  {
    id: '24',
    label:
      '[123456-A-2] Test Company One (FR): Château de Caudouin, 47310 Roquefort, France',
    parentId: '22',
  },
  { id: '25', label: '[123456-B] Test Company One (DE)', parentId: '1' },
  {
    id: '26',
    label:
      '[123456-B-1] Test Company One (DE): Sandnerhofweg 4-6, 94469 Deggendorf, Germany',
    parentId: '25',
  },
  {
    id: '27',
    label:
      '[123456-B-2] Test Company One (DE): Schorlemmerstraße 45, 64291 Darmstadt, Germany',
    parentId: '25',
  },
];

function convertRowsToTree(treeRows) {
  const root = {
    id: 'root',
    label: '',
    children: [],
  };
  // assume all nodes without parentId are top level nodes
  root.children = treeRows.filter(row => !row.parentId);

  function attachChildren(parentNode) {
    const children = treeRows.filter(r => r.parentId === parentNode.id);
    // eslint-disable-next-line no-param-reassign
    parentNode.children = children;
    children.forEach(c => attachChildren(c));
  }
  for (const n of root.children) {
    attachChildren(n);
  }
  return root;
}

const musicRootNode = convertRowsToTree(musicRows);
const accountsRootNode = convertRowsToTree(accountRows);
function Template({
  rootNode,
  selectedNodeId,
  checkboxesEnabled,
  hasIcons,
  removeChevron,
  allowMultiLine,
  appearance
}) {
  return html`<pr-tree
    appearance="default"
    .rootNode=${rootNode}
    .selectedNodeId=${selectedNodeId}
    ?checkboxesEnabled=${checkboxesEnabled}
    ?hasIcons=${hasIcons}
    ?removeChevron=${removeChevron}
    ?allowMultiLine=${allowMultiLine}
    @on-tree-node-checked=${() => console.log(musicRootNode)}
    @on-tree-node-selected=${e => console.log(e)}
  ></pr-tree>`;
}

export const MusicExample = Template.bind({});
MusicExample.args = {
  rootNode:musicRootNode,
  selectedNodeId:'24',
  checkboxesEnabled:false,
  hasIcons:true,
  allowMultiLine:false,
};

export const AccountsExample = Template.bind({});
AccountsExample.args = {
  rootNode: accountsRootNode,
  selectedNodeId: '24',
  checkboxesEnabled: false,
  hasIcons: false,
  allowMultiLine: true,
};
