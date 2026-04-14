import { makeAutoObservable } from 'mobx';
import { makePersistable, isHydrated, hydrateStore, clearPersistedStore, getPersistedStore, } from 'mobx-persist-store';
class AuthedUserState {
    constructor() {
        this.account_number = '';
        this.email = '';
        this.name = '';
        this.givenName = '';
        this.familyName = '';
        this.auth_time = '';
        this.access_token = '';
        this.id_token = '';
        this.bearer = '';
        this.account_hierarchy = undefined;
        this.selected_account = undefined;
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'x-auth',
            properties: [
                'email',
                'account_number',
                'name',
                'givenName',
                'familyName',
                'auth_time',
                'id_token',
                'access_token',
                'bearer',
                'account_hierarchy',
                'selected_account',
            ],
            storage: window.localStorage,
        });
    }
    setAccount({ accountNumber, email, name, givenName, familyName, authTime = new Date().getTime().toString(), accessToken, idToken, bearer = 'Bearer', }) {
        this.account_number = accountNumber;
        this.email = email;
        this.name = name;
        this.givenName = givenName;
        this.familyName = familyName;
        this.auth_time = authTime;
        this.access_token = accessToken;
        this.id_token = idToken;
        this.bearer = bearer;
    }
    getAccount() {
        return {
            accountNumber: this.account_number,
            email: this.email,
            name: this.name,
            givenName: this.givenName,
            familyName: this.familyName,
            authTime: this.auth_time,
        };
    }
    getAccountNumber() {
        return this.account_number;
    }
    getAccessToken() {
        return this.access_token;
    }
    getBearer() {
        return this.bearer;
    }
    getIdToken() {
        return this.id_token;
    }
    setAccountHierarchy(accountHierarchy) {
        this.account_hierarchy = accountHierarchy;
    }
    getAccountHierarchy() {
        return this.account_hierarchy;
    }
    setSelectedAccount(selectedAccount) {
        this.selected_account = selectedAccount;
    }
    getSelectedAccount() {
        return this.selected_account;
    }
    get isHydrated() {
        return isHydrated(this);
    }
    async hydrateStore() {
        await hydrateStore(this);
    }
    async clearStoredDate() {
        await clearPersistedStore(this);
    }
    async getStoredData() {
        return getPersistedStore(this);
    }
}
export const authedUser = new AuthedUserState();
