import { html } from 'lit';

const contactIcon = status => {
  const statusMap = {
    active: ['check_circle', 'Active'],
    invited: ['mail', 'Invited'],
    declined: ['do_not_disturb_on', 'Declined'],
    suspended: ['warning', 'Suspended'],
    removed: ['delete', 'Removed'],
  };

  const [icon, title] = statusMap[status] || [null, null];

  if (icon && title) {
    return html`✅`;
  }
  return null;
};

export const columns = [
  {
    name: 'firstName',
    header: 'First name',
    bodyRenderer: row => html` <span>${row.firstName}</span>`,
    sortable: true,
    filterable: true,
    hidden: false,
  },
  {
    name: 'lastName',
    header: 'Last name',
    bodyRenderer: row => html` <span>${row.lastName}</span>`,
    sortable: true,
    filterable: true,
  },
  {
    name: 'email',
    header: 'Email',
    bodyRenderer: row => html` <span>${row.email}</span>`,
    sortable: true,
    filterable: true,
  },
  {
    name: 'phone',
    header: 'Phone',
    bodyRenderer: row => html` <span>${row.phone}</span>`,
    sortable: true,
  },
  {
    name: 'accounts',
    header: 'Account',
    width: '40%',
    bodyRenderer: row => html` <div class="accounts">
      ${row.accounts.map(
        account =>
          html` ${contactIcon(account.status.toLowerCase())}<span
              class="account-name"
              >${account.name}</span
            >`
      )}
    </div>`,
  },
  {
    name: 'actions',
    header: 'Actions',
    bodyRenderer: () => html`
      <div>
        <span>Edit</span>
        <nbsp></nbsp>
        <span>Delete</span>
      </span>`,
    sortable: false,
    frozenToEnd: true,
  },
];
