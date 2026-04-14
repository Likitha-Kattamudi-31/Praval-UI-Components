const findAccountById = (accounts, id) => {
    const account = accounts.find(a => a.id === id);
    if (account) {
        return account;
    }
    for (const a of accounts) {
        if (a.subaccounts) {
            const foundAccount = findAccountById(a.subaccounts, id);
            if (foundAccount) {
                return foundAccount;
            }
        }
    }
    return undefined;
};
export default findAccountById;
