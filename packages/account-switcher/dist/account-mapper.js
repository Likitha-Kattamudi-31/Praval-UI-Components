export const mapAccountToIAccount = (payload) => {
    const response = [];
    payload.forEach(account => {
        response.push({
            accountNumber: account.account_number,
            name: account.name,
            parentAccountNumber: account.parent_account_number,
        });
    });
    return response;
};
