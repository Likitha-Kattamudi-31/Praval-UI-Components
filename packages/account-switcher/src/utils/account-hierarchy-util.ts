import { NestedAccounts } from '../types.js';

// Function to find the hierarchy given an ID
export const findAccountHierarchy = (
  accounts: NestedAccounts[],
  id: string
): NestedAccounts | null => {
  // Helper function to recursively search through subAccounts
  const search = (
    rootAccounts: NestedAccounts[] | undefined,
    rootAccountId: string
  ) => {
    for (const account of rootAccounts ?? []) {
      // Check if the current account matches the ID
      if (account.id === id) {
        return account;
      }
      // If it has subAccounts, search recursively
      if ((account.subaccounts ?? []).length > 0) {
        const result = search(account.subaccounts, rootAccountId);
        if (result) {
          return account; // Return the parent account if we found the target in subAccounts
        }
      }
    }
    return null;
  };

  // Iterate over the top-level accounts
  for (const account of accounts) {
    const result = search([account], id);
    if (result) {
      return account; // Return the top-level account if we found the target
    }
  }

  return null; // If no account is found
};
