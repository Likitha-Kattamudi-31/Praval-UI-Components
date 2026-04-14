import { makeAutoObservable } from 'mobx';
import {
  makePersistable,
  isHydrated,
  hydrateStore,
  clearPersistedStore,
  getPersistedStore,
} from 'mobx-persist-store';
import { NestedAccounts } from '../types.js';

class AuthedUserState {
  constructor() {
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

  public account_number: string = '';

  public email: string = '';

  public name: string = '';

  public givenName: string = '';

  public familyName: string = '';

  public auth_time: string = '';

  public access_token: string = '';

  public id_token: string = '';

  public bearer: string = '';

  public account_hierarchy?: NestedAccounts = undefined;

  public selected_account?: NestedAccounts = undefined;

  public setAccount({
    accountNumber,
    email,
    name,
    givenName,
    familyName,
    authTime = new Date().getTime().toString(),
    accessToken,
    idToken,
    bearer = 'Bearer',
  }: Record<string, string>) {
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

  public getAccount(): Record<string, string> {
    return {
      accountNumber: this.account_number,
      email: this.email,
      name: this.name,
      givenName: this.givenName,
      familyName: this.familyName,
      authTime: this.auth_time,
    };
  }

  public getAccountNumber(): string {
    return this.account_number;
  }

  public getAccessToken(): string {
    return this.access_token;
  }

  public getBearer(): string {
    return this.bearer;
  }

  public getIdToken(): string {
    return this.id_token;
  }

  public setAccountHierarchy(accountHierarchy: any) {
    this.account_hierarchy = accountHierarchy;
  }

  public getAccountHierarchy() {
    return this.account_hierarchy;
  }

  public setSelectedAccount(selectedAccount: NestedAccounts | undefined) {
    this.selected_account = selectedAccount;
  }

  public getSelectedAccount() {
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
