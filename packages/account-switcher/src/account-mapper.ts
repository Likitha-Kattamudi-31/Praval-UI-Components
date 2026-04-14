import type { Account, IAccount } from './types.js';

export const mapAccountToIAccount = (payload: Account[]): IAccount[] => {
  const response: IAccount[] = [];

  payload.forEach(account => {
    response.push({
      accountNumber: account.account_number,
      name: account.name,
      parentAccountNumber: account.parent_account_number,
    });
  });

  return response;
};
