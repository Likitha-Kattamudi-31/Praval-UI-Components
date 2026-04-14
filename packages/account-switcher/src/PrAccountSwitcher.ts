import "@praval/prvl-tree-component/pr-tree.js";
import { html, LitElement, nothing, TemplateResult } from "lit";
import { property, query, state } from "lit/decorators.js";
import findAccountById from "./utils/find-account-by-id.js";
import { mapAccountsToTreeNode } from "./utils/map-accounts-to-tree.js";
import type { NestedAccounts } from "./types.js";
import { authedUser } from "./state/authedUser.js";
import { findAccountHierarchy } from "./utils/account-hierarchy-util.js";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate = false,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

export class PrAccountSwitcher extends LitElement {
  @query("#accountTree") readonly accountTree!: HTMLElement;

  @query("#searchInput") readonly searchInput!: HTMLElement;

  @property({ type: String, reflect: true }) selectedAccountNumber: string = "";

  @property({ type: Array }) accounts: NestedAccounts[] = [];

  @property({ type: Boolean }) prevDataAvailable: boolean = false;

  @property({ type: Boolean }) nextDataAvailable: boolean = false;

  @property({ type: Boolean }) disabled: boolean = false;

  @property({ type: Boolean }) enableFilterDialog: boolean = false;

  @state() showDialog: boolean = false;

  @state() visibleAccounts: NestedAccounts[] = [];

  @property({ type: Boolean }) loading: boolean = false;

  @state() scrollLoading: boolean = false;

  @state() prevScrollLoading: boolean = false;

  @state() displayFilters: boolean = false;

  @state() filterString: string = "";

  @state() selectedAccount?: NestedAccounts;

  @state() scrollTop: number = 0;

  @state() accountsLength: number = 0;

  @state() resettingInitialList: boolean = false;

  @state() rebuildingTree: boolean = false;

  @property() keyValue: string = "";

  @state() treeData: any = mapAccountsToTreeNode(this.accounts, "");

  @state() private enableFetchPage: boolean = false;

  @state() selectedNodeRef: HTMLElement | null = null;

  updated = async (changedProperties: Map<string | symbol, unknown>) => {
    super.updated(changedProperties);

    if (
      changedProperties.has("accounts") ||
      changedProperties.has("selectedAccountNumber")
    ) {
      this.loading = false;
      if (
        !this.selectedAccount ||
        changedProperties.has("selectedAccountNumber")
      ) {
        this.selectedAccount = this.getSelectedAccount();
      }

      authedUser.setAccountHierarchy(
        findAccountHierarchy(this.accounts, this.selectedAccountNumber),
      );
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
      } else if (this.prevScrollLoading) {
        this.prevScrollLoading = false;
        const accountIndex = this.accounts.length - this.accountsLength;
        await this.awaitUpdateComplete();
        this.getAnchorNode(accountIndex)?.scrollIntoView({ block: "start" });
        this.accountTree.scrollTop -= 20;
      } else if (this.resettingInitialList) {
        await this.awaitUpdateComplete();
        this.scrollSelectedAccountIntoView();
        this.resettingInitialList = false;
      }
    }
  };

  private async awaitUpdateComplete() {
    await this.updateComplete;
    await new Promise(requestAnimationFrame);
    await new Promise(requestAnimationFrame);
  }

  private async filterVisibleAccounts() {
    this.treeData = mapAccountsToTreeNode(
      this.accounts,
      this.filterString.length > 2 ? this.filterString : undefined,
    );

    this.rebuildingTree = true;
    await this.awaitUpdateComplete();
    this.rebuildingTree = false;
  }

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
  filterAccountsBySearchTerm = debounce(async (filterString: string) => {
    if (this.filterString.length < 3 && filterString.length < 3) {
      this.filterString = filterString;
      // no need to update tree
      return;
    }

    this.filterString = filterString;

    if (filterString.length < 3) {
      this.resettingInitialList = true;
    }

    this.dispatchEvent(
      new CustomEvent("account-fetch", {
        detail: {
          id: this.selectedAccountNumber,
          filterString: filterString.length < 3 ? "" : filterString,
        },
        bubbles: true,
        composed: true,
      }),
    );

    this.loading = true;
  }, 300);
  getAnchorNode = (position: number) => {
    const tree = this.accountTree.querySelector("pr-tree") as HTMLElement;
    if (tree?.shadowRoot) {
      const treeContainer = tree.shadowRoot.querySelector(
        ".pr-tree-container",
      ) as HTMLElement;
      return treeContainer.children[position] as HTMLElement;
    }
    return null;
  };

  getMoreAccountsOnScroll = async (e: Event) => {
    if (!this.enableFetchPage) {
      this.enableFetchPage = true;
      return;
    }
    if (this.scrollLoading || this.prevScrollLoading || this.loading) return;

    const target = e.currentTarget as HTMLElement;
    const distanceToBottom =
      this.accountTree.scrollHeight -
      (target.clientHeight + this.accountTree.scrollTop);

    if (
      this.accountTree.scrollTop < this.scrollTop &&
      this.accountTree.scrollTop < 12
    ) {
      if (!this.prevDataAvailable) return;
      this.prevScrollLoading = true;
      this.accountsLength = this.accounts.length;
      this.dispatchEvent(
        new CustomEvent("account-fetch", {
          detail: {
            id: this.selectedAccountNumber,
            filterString: this.filterString,
            prev: true,
          },
          bubbles: true,
          composed: true,
        }),
      );
      this.enableFetchPage = false;
    }

    if (this.accountTree.scrollTop > this.scrollTop && distanceToBottom < 2) {
      if (!this.nextDataAvailable) return;
      this.scrollLoading = true;
      await this.updateComplete;
      this.scrollTop = this.accountTree.scrollTop;
      this.accountsLength = this.accounts.length;
      this.dispatchEvent(
        new CustomEvent("account-fetch", {
          detail: {
            id: this.selectedAccountNumber,
            filterString: this.filterString,
            next: true,
          },
          bubbles: true,
          composed: true,
        }),
      );
      this.enableFetchPage = false;
    }

    this.scrollTop = this.accountTree.scrollTop;
  };

  openDialog = () => {
    if (this.disabled) return;
    if (this.accounts.length === 0) {
      this.loading = true;
      this.dispatchEvent(
        new CustomEvent("account-fetch", {
          detail: {
            id: this.selectedAccountNumber,
            filterString: "",
          },
          bubbles: true,
          composed: true,
        }),
      );
    }
    this.showDialog = true;
    const el = this.searchInput as HTMLElement;
    if (el) {
      const inner = el.querySelector("md-filled-text-field");
      const field = inner?.shadowRoot?.querySelector("md-filled-field");
      const icon = field?.shadowRoot?.querySelector(".start") as HTMLElement;
      if (icon) {
        icon.style.minWidth = "32px";
        icon.style.color = "rgba(9, 34, 65, 0.7)";
      }
      if (field) {
        const input = field.querySelector("input") as HTMLInputElement;
        input.style.lineHeight = "24px";
        setTimeout(() => {
          input.focus();
        }, 50);
      }
    }

    this.scrollSelectedAccountIntoView();
  };

  scrollSelectedAccountIntoView = async () => {
    await this.awaitUpdateComplete();

    if (!this.selectedNodeRef || !this.selectedNodeRef.isConnected) return;

    // scroll selected account into view
    this.selectedNodeRef.scrollIntoView({
      block: "start",
    });

    // Adjust scroll position slightly to ensure can scroll
    this.accountTree.scrollTop -= 4;

    this.scrollTop = this.accountTree.scrollTop;
  };

  closeDialog = () => {
    this.showDialog = false;
    if (this.filterString.length > 0) {
      this.filterString = "";
      this.dispatchEvent(
        new CustomEvent("account-fetch", {
          detail: {
            id: this.selectedAccountNumber,
            filterString: "",
          },
          bubbles: true,
          composed: true,
        }),
      );
      // this.filterVisibleAccounts();
    }
    this.filterString = "";
  };

  private renderTree(): TemplateResult<1> {
    if (!this.accounts.length)
      return html`<div class="padded-container">
        <p class="no-results">No Results Found</p>
      </div>`;
    if (this.rebuildingTree) {
      return html``;
    }
    return html`
      <pr-tree
        aria-label="Account Switcher"
        .rootNode=${this.treeData}
        selectedNodeId=${this.selectedAccountNumber}
        ?allowMultiline=${true}
        @selected-node-ref=${(e: CustomEvent) => {
          this.selectedNodeRef = e.detail;
        }}
        @on-tree-node-selected=${(e: CustomEvent) => {
          if (e.detail.message.id === this.selectedAccountNumber) {
            this.closeDialog();
            return;
          }
          this.dispatchEvent(
            new CustomEvent("account-switched", {
              detail: e.detail.message.id,
              bubbles: true,
              composed: true,
            }),
          );
          this.loading = true;
        }}
      ></pr-tree>
    `;
  }

  private renderDialog(): TemplateResult<1> {
    return html` <div class="dialog-container">
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
            @keydown=${(e: KeyboardEvent) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            @input=${(e: Event) => {
              //  e.stopPropagation();
              const input = e.target as HTMLInputElement;
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
                ? html`
                    <div id="loadPrevious">
                      ${this.prevScrollLoading
                        ? html`<div>
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
                ? html`<div class="loading-container-switch">
                    <md-circular-progress
                      indeterminate
                      style="z-index: 100000;"
                    ></md-circular-progress>
                  </div>`
                : this.renderTree()}
              <div id="loadMore">
                ${this.scrollLoading
                  ? html`<div>
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
    const selectedAccount = findAccountById(
      this.accounts,
      this.selectedAccountNumber as string,
    );
    authedUser.setSelectedAccount(selectedAccount ?? undefined);

    return selectedAccount;
  }
  private renderNestedAccountStructureSelect(): TemplateResult<1> {
    console.log("renderNestedAccountStructureSelect");
    return html`
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
  private renderFlatAccountStructureSelect(): TemplateResult<1> {
    console.log("insideeeeee");
    const selectedAccount = this.getSelectedAccount();
    console.log(selectedAccount?.displayName, "scvdhsvd");
    const options = this.accounts.map((account) => {
      const isSelected = account.id === selectedAccount?.id;

      return html`
        <option value=${account.id} ?selected=${isSelected}>
          ${account?.displayName ?? account.name}
        </option>
      `;
    });

    return html`<div class="account-switcher__select">
      <select
        ?disabled=${this.disabled}
        @change=${(e: Event) => {
          const target = e.target as HTMLSelectElement;

          this.dispatchEvent(
            new CustomEvent("account-switched", {
              detail: target.value,
              bubbles: true,
              composed: true,
            }),
          );
        }}
      >
        ${options}
      </select>
      <span class="select-arrow">▾</span>
    </div>`;
  }

  render(): TemplateResult<1> {
    const hasSubaccounts = this.accounts.some(
      (a) => a.subaccounts && a.subaccounts.length > 0,
    );

    return html`
      <div class="account-switcher-container">
        ${hasSubaccounts || this.enableFilterDialog
          ? this.renderNestedAccountStructureSelect()
          : this.renderFlatAccountStructureSelect()}
      </div>

      ${hasSubaccounts || this.enableFilterDialog ? this.renderDialog() : null}
    `;
  }
}
