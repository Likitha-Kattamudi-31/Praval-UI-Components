import { html } from 'lit';
import '../packages/account-switcher/dist/pr-account-switcher.js';
  import { authedUser } from '../packages/account-switcher/dist/state/authedUser.js';
import { defaultStoryLayout } from './story-helpers.js';

export default {
  title: 'Praval/pr-account-switcher',
  component: 'pr-account-switcher',
  enableShortcuts: false,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is a custom account switcher component.',
      },
    },
  },
  decorators: [defaultStoryLayout], // Add custom styling around the story
  argTypes: {
    selectedAccount: { control: 'text' },
    accounts: { control: 'object' },
  },
};

const allAccounts = [
  {
    id: '1134884',
    name: 'CS Ventures',
    displayName: '[1134884] CS Ventures',
    status: '',
    subaccounts: [
      {
        id: 'DFW016-441941-40009',
        name: 'Cloudstorm Ventures Inc. - Richardson, 1232 Alma Rd',
        displayName:
          '[DFW016-441941-40009] Cloudstorm Ventures Inc. - Richardson, 1232 Alma Rd',
        status: '',
        subaccounts: [],
      },
      {
        id: 'YYZ011-441941-40009',
        name: 'Cloudstorm Ventures Inc. - Toronto, 1 Century Place Vaughan',
        displayName:
          '[YYZ011-441941-40009] Cloudstorm Ventures Inc. - Toronto, 1 Century Place Vaughan',
        status: '',
        subaccounts: [],
      },
    ],
  },

  {
    id: 'google-ca-002',
    name: 'Google Canada',
    displayName: 'Google Canada 002',
    status: '',
    subaccounts: [],
  },
  {
    id: 'google-ca-003',
    name: 'Google Canadass',
    displayName: 'Google Canada 003',
    status: '',
    subaccounts: [],
  },

  {
    id: 'amazon-001',
    name: 'Amazon Global',
    displayName: '[amazon-001] Amazon Global',
    status: '',
    subaccounts: [],
  },
  {
    id: 'amazon-002',
    name: 'Amazon Canada',
    displayName: '[amazon-002] Amazon Canada',
    status: '',
    subaccounts: [],
  },

  {
    id: 'meta-001',
    name: 'Meta Platforms',
    displayName: '[meta-001] Meta Platforms',
    status: '',
    subaccounts: [],
  },
  {
    id: 'meta-002',
    name: 'Meta Ads',
    displayName: '[meta-002] Meta Ads',
    status: '',
    subaccounts: [],
  },

  {
    id: 'oracle-001',
    name: 'Oracle Global',
    displayName: '[oracle-001] Oracle Global',
    status: '',
    subaccounts: [],
  },
  {
    id: 'oracle-002',
    name: 'Oracle Cloud',
    displayName: '[oracle-002] Oracle Cloud',
    status: '',
    subaccounts: [],
  },

  {
    id: 'ibm-001',
    name: 'IBM Global',
    displayName: '[ibm-001] IBM Global',
    status: '',
    subaccounts: [],
  },
  {
    id: 'ibm-002',
    name: 'IBM Watson',
    displayName: '[ibm-002] IBM Watson',
    status: '',
    subaccounts: [],
  },

  {
    id: 'salesforce-001',
    name: 'Salesforce Global',
    displayName: '[salesforce-001] Salesforce Global',
    status: '',
    subaccounts: [],
  },
  {
    id: 'salesforce-002',
    name: 'Salesforce CRM',
    displayName: '[salesforce-002] Salesforce CRM',
    status: '',
    subaccounts: [],
  },

  {
    id: 'microsoft-global-001',
    name: 'Microsoft Global',
    displayName: '[microsoft-global-001] Microsoft Global',
    status: '',
    subaccounts: [
      {
        id: 'microsoft-us-001',
        name: 'Microsoft US',
        displayName: '[microsoft-us-001] Microsoft US',
        status: '',
        subaccounts: [
          {
            id: 'microsoft-us-east-001',
            name: 'Microsoft US East',
            displayName: 'Microsoft US East',
            status: '',
            subaccounts: [],
          },
          {
            id: 'microsoft-us-west-001',
            name: 'Microsoft US West',
            displayName: 'Microsoft US West',
            status: '',
            subaccounts: [],
          },
        ],
      },
      {
        id: 'microsoft-eu-001',
        name: 'Microsoft EU',
        displayName: '[microsoft-eu-001] Microsoft EU',
        status: '',
        subaccounts: [
          {
            id: 'microsoft-uk-001',
            name: 'Microsoft UK',
            displayName: '[microsoft-uk-001] Microsoft UK',
            status: '',
            subaccounts: [],
          },
          {
            id: 'microsoft-ie-001',
            name: 'Microsoft IE',
            displayName: '[microsoft-ie-001] Microsoft IE',
            status: '',
            subaccounts: [],
          },
        ],
      },
    ],
  },
];

const Template = () => {

  let visibleAccounts = [...allAccounts];

  authedUser.setAccount({
    accountNumber: "google-ca-003"
  });
const filterAccounts = (accounts, search) => {
  const result = [];

  for (const account of accounts) {
    const label = (account.displayName || account.name || "").toLowerCase();
    const matches = label.includes(search);

    let filteredChildren = [];

    if (account.subaccounts?.length) {
      filteredChildren = filterAccounts(account.subaccounts, search);
    }

    if (matches || filteredChildren.length) {
      result.push({
        ...account,
        subaccounts: filteredChildren
      });
    }
  }

  return result;
};
 const accountFetch = (event) => {
  const { filterString } = event.detail;

  let filteredAccounts;

  if (filterString && filterString.length >= 3) {
    filteredAccounts = filterAccounts(
      allAccounts,
      filterString.toLowerCase()
    );
  } else {
    filteredAccounts = allAccounts;
  }

  const switcher = document.querySelector("pr-account-switcher");

  if (switcher) {
    switcher.accounts = filteredAccounts;
  }
};

  const accountSwitched = (event) => {
    const accountNumber = event.detail;

    authedUser.setAccount({
      accountNumber: accountNumber
    });

    const switcher = document.querySelector("pr-account-switcher");

    if (switcher) {
      switcher.selectedAccountNumber = authedUser.getAccountNumber();
    }
  };

  return html`
    <div data-theme="ix-theme">

      <pr-account-switcher
        .accounts=${visibleAccounts}
        selectedAccountNumber=${authedUser.getAccountNumber()}
        enableFilterDialog
        @account-fetch=${accountFetch}
        @account-switched=${accountSwitched}
      ></pr-account-switcher>

    </div>
  `;
};
export const Default = Template.bind({});
