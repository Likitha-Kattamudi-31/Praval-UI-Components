import { __decorate } from "tslib";
import "@praval/prvl-tree-component/pr-tree.js";
import { html, LitElement, nothing } from "lit";
import { property, query, state } from "lit/decorators.js";
import findAccountById from "./utils/find-account-by-id.js";
import { mapAccountsToTreeNode } from "./utils/map-accounts-to-tree.js";
import { authedUser } from "./state/authedUser.js";
import { findAccountHierarchy } from "./utils/account-hierarchy-util.js";
function debounce(func, wait, immediate = false) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = () => {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
export class PrAccountSwitcher extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedAccountNumber = "";
        this.accounts = [];
        this.prevDataAvailable = false;
        this.nextDataAvailable = false;
        this.disabled = false;
        this.enableFilterDialog = false;
        this.showDialog = false;
        this.visibleAccounts = [];
        this.loading = false;
        this.scrollLoading = false;
        this.prevScrollLoading = false;
        this.displayFilters = false;
        this.filterString = "";
        this.scrollTop = 0;
        this.accountsLength = 0;
        this.resettingInitialList = false;
        this.rebuildingTree = false;
        this.keyValue = "";
        this.treeData = mapAccountsToTreeNode(this.accounts, "");
        this.enableFetchPage = false;
        this.selectedNodeRef = null;
        this.updated = async (changedProperties) => {
            super.updated(changedProperties);
            if (changedProperties.has("accounts") ||
                changedProperties.has("selectedAccountNumber")) {
                this.loading = false;
                if (!this.selectedAccount ||
                    changedProperties.has("selectedAccountNumber")) {
                    this.selectedAccount = this.getSelectedAccount();
                }
                authedUser.setAccountHierarchy(findAccountHierarchy(this.accounts, this.selectedAccountNumber));
                this.filterVisibleAccounts();
                if (this.scrollLoading) {
                    const hasPrevData = this.prevDataAvailable;
                    this.prevDataAvailable = false;
                    this.scrollLoading = false;
                    await this.awaitUpdateComplete();
                    this.getAnchorNode(this.accountsLength - 1)?.scrollIntoView({
                        block: "end",
                    });
                    this.prevDataAvailable = hasPrevData;
                    this.accountTree.scrollTop += 20;
                }
                else if (this.prevScrollLoading) {
                    this.prevScrollLoading = false;
                    const accountIndex = this.accounts.length - this.accountsLength;
                    await this.awaitUpdateComplete();
                    this.getAnchorNode(accountIndex)?.scrollIntoView({ block: "start" });
                    this.accountTree.scrollTop -= 20;
                }
                else if (this.resettingInitialList) {
                    await this.awaitUpdateComplete();
                    this.scrollSelectedAccountIntoView();
                    this.resettingInitialList = false;
                }
            }
        };
        // filterAccountsBySearchTerm = debounce(async (filterString: string) => {
        //   if (this.filterString.length < 3 && filterString.length < 3) {
        //     this.filterString = filterString;
        //     // no need to update tree
        //     return;
        //   }
        //   this.filterString = filterString;
        //   if (filterString.length < 3) {
        //     this.resettingInitialList = true;
        //   }
        //   // this.dispatchEvent(
        //   //   new CustomEvent("account-fetch", {
        //   //     detail: {
        //   //       id: this.selectedAccountNumber,
        //   //       filterString: filterString.length < 3 ? "" : filterString,
        //   //     },
        //   //     bubbles: true,
        //   //     composed: true,
        //   //   }),
        //   // );
        //     this.filterVisibleAccounts();
        //     this.filterString="";
        //   // this.loading = true;
        // }, 300);
        this.filterAccountsBySearchTerm = debounce(async (filterString) => {
            if (this.filterString.length < 3 && filterString.length < 3) {
                this.filterString = filterString;
                // no need to update tree
                return;
            }
            this.filterString = filterString;
            if (filterString.length < 3) {
                this.resettingInitialList = true;
            }
            this.dispatchEvent(new CustomEvent("account-fetch", {
                detail: {
                    id: this.selectedAccountNumber,
                    filterString: filterString.length < 3 ? "" : filterString,
                },
                bubbles: true,
                composed: true,
            }));
            this.loading = true;
        }, 300);
        this.getAnchorNode = (position) => {
            const tree = this.accountTree.querySelector("pr-tree");
            if (tree?.shadowRoot) {
                const treeContainer = tree.shadowRoot.querySelector(".pr-tree-container");
                return treeContainer.children[position];
            }
            return null;
        };
        this.getMoreAccountsOnScroll = async (e) => {
            if (!this.enableFetchPage) {
                this.enableFetchPage = true;
                return;
            }
            if (this.scrollLoading || this.prevScrollLoading || this.loading)
                return;
            const target = e.currentTarget;
            const distanceToBottom = this.accountTree.scrollHeight -
                (target.clientHeight + this.accountTree.scrollTop);
            if (this.accountTree.scrollTop < this.scrollTop &&
                this.accountTree.scrollTop < 12) {
                if (!this.prevDataAvailable)
                    return;
                this.prevScrollLoading = true;
                this.accountsLength = this.accounts.length;
                this.dispatchEvent(new CustomEvent("account-fetch", {
                    detail: {
                        id: this.selectedAccountNumber,
                        filterString: this.filterString,
                        prev: true,
                    },
                    bubbles: true,
                    composed: true,
                }));
                this.enableFetchPage = false;
            }
            if (this.accountTree.scrollTop > this.scrollTop && distanceToBottom < 2) {
                if (!this.nextDataAvailable)
                    return;
                this.scrollLoading = true;
                await this.updateComplete;
                this.scrollTop = this.accountTree.scrollTop;
                this.accountsLength = this.accounts.length;
                this.dispatchEvent(new CustomEvent("account-fetch", {
                    detail: {
                        id: this.selectedAccountNumber,
                        filterString: this.filterString,
                        next: true,
                    },
                    bubbles: true,
                    composed: true,
                }));
                this.enableFetchPage = false;
            }
            this.scrollTop = this.accountTree.scrollTop;
        };
        this.openDialog = () => {
            if (this.disabled)
                return;
            if (this.accounts.length === 0) {
                this.loading = true;
                this.dispatchEvent(new CustomEvent("account-fetch", {
                    detail: {
                        id: this.selectedAccountNumber,
                        filterString: "",
                    },
                    bubbles: true,
                    composed: true,
                }));
            }
            this.showDialog = true;
            const el = this.searchInput;
            if (el) {
                const inner = el.querySelector("md-filled-text-field");
                const field = inner?.shadowRoot?.querySelector("md-filled-field");
                const icon = field?.shadowRoot?.querySelector(".start");
                if (icon) {
                    icon.style.minWidth = "32px";
                    icon.style.color = "rgba(9, 34, 65, 0.7)";
                }
                if (field) {
                    const input = field.querySelector("input");
                    input.style.lineHeight = "24px";
                    setTimeout(() => {
                        input.focus();
                    }, 50);
                }
            }
            this.scrollSelectedAccountIntoView();
        };
        this.scrollSelectedAccountIntoView = async () => {
            await this.awaitUpdateComplete();
            if (!this.selectedNodeRef || !this.selectedNodeRef.isConnected)
                return;
            // scroll selected account into view
            this.selectedNodeRef.scrollIntoView({
                block: "start",
            });
            // Adjust scroll position slightly to ensure can scroll
            this.accountTree.scrollTop -= 4;
            this.scrollTop = this.accountTree.scrollTop;
        };
        this.closeDialog = () => {
            this.showDialog = false;
            if (this.filterString.length > 0) {
                this.filterString = "";
                this.dispatchEvent(new CustomEvent("account-fetch", {
                    detail: {
                        id: this.selectedAccountNumber,
                        filterString: "",
                    },
                    bubbles: true,
                    composed: true,
                }));
                // this.filterVisibleAccounts();
            }
            this.filterString = "";
        };
    }
    async awaitUpdateComplete() {
        await this.updateComplete;
        await new Promise(requestAnimationFrame);
        await new Promise(requestAnimationFrame);
    }
    async filterVisibleAccounts() {
        this.treeData = mapAccountsToTreeNode(this.accounts, this.filterString.length > 2 ? this.filterString : undefined);
        this.rebuildingTree = true;
        await this.awaitUpdateComplete();
        this.rebuildingTree = false;
    }
    renderTree() {
        if (!this.accounts.length)
            return html `<div class="padded-container">
        <p class="no-results">No Results Found</p>
      </div>`;
        if (this.rebuildingTree) {
            return html ``;
        }
        return html `
      <pr-tree
        aria-label="Account Switcher"
        .rootNode=${this.treeData}
        selectedNodeId=${this.selectedAccountNumber}
        ?allowMultiline=${true}
        @selected-node-ref=${(e) => {
            this.selectedNodeRef = e.detail;
        }}
        @on-tree-node-selected=${(e) => {
            if (e.detail.message.id === this.selectedAccountNumber) {
                this.closeDialog();
                return;
            }
            this.dispatchEvent(new CustomEvent("account-switched", {
                detail: e.detail.message.id,
                bubbles: true,
                composed: true,
            }));
            this.loading = true;
        }}
      ></pr-tree>
    `;
    }
    renderDialog() {
        return html ` <div class="dialog-container">
      <dialog
        id="account-switcher-dialog"
        ?open=${this.showDialog}
        @close=${this.closeDialog}
        disableNextClickIsFromContent="true"
      >
        <div class="headline" slot="headline">
          <span class="title">Switch Account</span>
          <button @click=${this.closeDialog} class="icon-button">✕</button>
        </div>

        <form
          id="account-switcher-dialog-form"
          class="form"
          method="dialog"
          slot="content"
        >
          <input
            id="searchInput"
            type="text"
            placeholder="Search"
            .value=${this.filterString}
            @keydown=${(e) => {
            if (e.key === "Enter") {
                e.preventDefault();
            }
        }}
            @input=${(e) => {
            //  e.stopPropagation();
            const input = e.target;
            this.filterAccountsBySearchTerm(input.value);
        }}
          />
          <div
            id="accountTree"
            style="${this.loading ? "loading-container-switch" : ""}"
            @scroll=${this.getMoreAccountsOnScroll}
          >
            <div id="scroll-inner">
              ${this.prevDataAvailable
            ? html `
                    <div id="loadPrevious">
                      ${this.prevScrollLoading
                ? html `<div>
                            <md-circular-progress
                              indeterminate
                              style="z-index: 100000;"
                            ></md-circular-progress>
                          </div>`
                : nothing}
                    </div>
                  `
            : nothing}
              ${this.loading
            ? html `<div class="loading-container-switch">
                    <md-circular-progress
                      indeterminate
                      style="z-index: 100000;"
                    ></md-circular-progress>
                  </div>`
            : this.renderTree()}
              <div id="loadMore">
                ${this.scrollLoading
            ? html `<div>
                      <md-circular-progress
                        indeterminate
                        style="z-index: 100000;"
                      ></md-circular-progress>
                    </div>`
            : nothing}
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>`;
    }
    getSelectedAccount() {
        const selectedAccount = findAccountById(this.accounts, this.selectedAccountNumber);
        authedUser.setSelectedAccount(selectedAccount ?? undefined);
        return selectedAccount;
    }
    renderNestedAccountStructureSelect() {
        console.log("renderNestedAccountStructureSelect");
        return html `
      <div
        class="field-container"
        ?disabled=${this.disabled}
        @click=${this.openDialog}
      >
        <div class="subaccount-wrap">
          <span class="subaccount-name">
            ${this.selectedAccount?.displayName}
          </span>

          <span class="dd-icon"> ▾&nbsp; </span>
        </div>
      </div>
    `;
    }
    renderFlatAccountStructureSelect() {
        console.log("insideeeeee");
        const selectedAccount = this.getSelectedAccount();
        console.log(selectedAccount?.displayName, "scvdhsvd");
        const options = this.accounts.map((account) => {
            const isSelected = account.id === selectedAccount?.id;
            return html `
        <option value=${account.id} ?selected=${isSelected}>
          ${account?.displayName ?? account.name}
        </option>
      `;
        });
        return html `<div class="account-switcher__select">
      <select
        ?disabled=${this.disabled}
        @change=${(e) => {
            const target = e.target;
            this.dispatchEvent(new CustomEvent("account-switched", {
                detail: target.value,
                bubbles: true,
                composed: true,
            }));
        }}
      >
        ${options}
      </select>
      <span class="select-arrow">▾</span>
    </div>`;
    }
    render() {
        const hasSubaccounts = this.accounts.some((a) => a.subaccounts && a.subaccounts.length > 0);
        return html `
      <div class="account-switcher-container">
        ${hasSubaccounts || this.enableFilterDialog
            ? this.renderNestedAccountStructureSelect()
            : this.renderFlatAccountStructureSelect()}
      </div>

      ${hasSubaccounts || this.enableFilterDialog ? this.renderDialog() : null}
    `;
    }
}
__decorate([
    query("#accountTree")
], PrAccountSwitcher.prototype, "accountTree", void 0);
__decorate([
    query("#searchInput")
], PrAccountSwitcher.prototype, "searchInput", void 0);
__decorate([
    property({ type: String, reflect: true })
], PrAccountSwitcher.prototype, "selectedAccountNumber", void 0);
__decorate([
    property({ type: Array })
], PrAccountSwitcher.prototype, "accounts", void 0);
__decorate([
    property({ type: Boolean })
], PrAccountSwitcher.prototype, "prevDataAvailable", void 0);
__decorate([
    property({ type: Boolean })
], PrAccountSwitcher.prototype, "nextDataAvailable", void 0);
__decorate([
    property({ type: Boolean })
], PrAccountSwitcher.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], PrAccountSwitcher.prototype, "enableFilterDialog", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "showDialog", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "visibleAccounts", void 0);
__decorate([
    property({ type: Boolean })
], PrAccountSwitcher.prototype, "loading", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "scrollLoading", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "prevScrollLoading", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "displayFilters", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "filterString", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "selectedAccount", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "scrollTop", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "accountsLength", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "resettingInitialList", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "rebuildingTree", void 0);
__decorate([
    property()
], PrAccountSwitcher.prototype, "keyValue", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "treeData", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "enableFetchPage", void 0);
__decorate([
    state()
], PrAccountSwitcher.prototype, "selectedNodeRef", void 0);
