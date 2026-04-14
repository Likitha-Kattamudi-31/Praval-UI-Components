/* eslint-disable no-restricted-globals */
import { elementUpdated, fixture, oneEvent } from "@open-wc/testing";
import { html } from "lit";
import { expect } from "vitest";
import { PrGridRowFilter } from "../components/PrGridRowFilter.js";
import "../components/pr-grid-no-rows.js";
import "../pr-grid.js";
import { beforeEach, describe, it } from "vitest";
const rows = [
    {
        name: "one",
    },
    {
        name: "two",
    },
    {
        name: "three",
    },
];
const columns = [
    {
        name: "one",
        header: "one",
        bodyRenderer: (row) => html `<span>${row.name}</span>`,
        filterable: true,
        filterOperators: ["equals"],
    },
    {
        name: "two",
        header: "one",
        bodyRenderer: (row) => html `<span>${row.name}</span>`,
        filterable: true,
        filterOperators: ["equals", "contains"],
    },
    {
        name: "three",
        header: "one",
        bodyRenderer: (row) => html `<span>${row.name}</span>`,
        filterable: true,
        filterOperators: ["equals", "contains"],
    },
];
const sessionStorageKey = "test-session-key";
describe("PrGrid", () => {
    beforeEach(() => {
        sessionStorage.clear();
    });
    it("renders a grid", async () => {
        const el = await fixture(html `<pr-grid></pr-grid>`);
        expect(el).to.not.be.null;
    });
    it("renders the correct number of rows", async () => {
        const el = await fixture(html `<pr-grid .columns=${columns} .rows=${rows}></pr-grid>`);
        expect(rows.length).to.equal(3);
        expect(el).to.not.be.null;
    });
    it("renders no rows component state", async () => {
        const el = await fixture(html `<pr-grid .columns=${columns} .rows=${[]}
        ><pr-grid-no-rows slot="no-rows"></pr-grid-no-rows
      ></pr-grid>`);
        const noRows = el.shadowRoot?.querySelector('slot[name="no-rows"]');
        expect(noRows).to.not.be.null;
    });
    it("renders an pr-grid-row-filter", async () => {
        const el = await fixture(html `<pr-grid
        .columns=${columns}
        .rows=${rows}
        .filterValueChangeDebounceTime=${1000}
      ></pr-grid>`);
        const rowFilter = el.shadowRoot?.querySelector("pr-grid-row-filter");
        expect(rowFilter).to.be.instanceOf(PrGridRowFilter);
        expect(rowFilter.filterValueChangeDebounceTime).to.equal(1000);
    });
    it("resets pagination upon filter change", async () => {
        const el = await fixture(html `<pr-grid
        session-storage-key=${sessionStorageKey}
        .columns=${columns}
        .rows=${rows}
      ></pr-grid>`);
        const pagination = el.shadowRoot?.querySelector("pr-pagination");
        pagination.dispatchEvent(new CustomEvent("updatePagination", {
            detail: {
                page: 2,
                pageSize: 10,
            },
            bubbles: true,
            composed: true,
        }));
        expect(el.page).to.equal(2);
        const rowFilter = el.shadowRoot?.querySelector("pr-grid-row-filter");
        rowFilter.dispatchEvent(new CustomEvent("rowFilter", {
            detail: {
                resetPage: true,
            },
            bubbles: true,
            composed: true,
        }));
        expect(el.page).to.equal(1);
    });
    it("should read and set params from URL when readParamsFromURL is true", async () => {
        const url = "?sort=lastName&order=asc&page=2&size=5";
        history.pushState(null, "", `${location.pathname}${url}`);
        sessionStorage.removeItem(`urlPageSizeRead`);
        // 🔥 Mock globally BEFORE component is created
        const original = HTMLElement.prototype.getBoundingClientRect;
        HTMLElement.prototype.getBoundingClientRect = function () {
            return { width: 100 };
        };
        const el = await fixture(html `<pr-grid
        .columns=${columns}
        .rows=${rows}
        .readParamsFromURL=${true}
        session-storage-key=${sessionStorageKey}
      ></pr-grid>`);
        await el.updateComplete;
        expect(el.page).to.equal(2);
        expect(el.pageSize).to.equal(5);
        expect(el.sortedColumn).to.equal("lastName");
        expect(el.sortDirection).to.equal("asc");
        // ✅ Restore original (VERY IMPORTANT)
        HTMLElement.prototype.getBoundingClientRect = original;
    });
    // it("sessionStorage sets the URL", async () => {
    //   sessionStorage.setItem(
    //     `grid-${sessionStorageKey}`,
    //     JSON.stringify({
    //       pageSize: 25,
    //     }),
    //   );
    //   // 🔥 Mock BEFORE component creation
    //   const original = HTMLElement.prototype.getBoundingClientRect;
    //   HTMLElement.prototype.getBoundingClientRect = function () {
    //     return { width: 100 } as DOMRect;
    //   };
    //   const el = await fixture<PrGrid>(
    //     html`<pr-grid
    //       .columns=${columns}
    //       .rows=${rows}
    //       session-storage-key=${sessionStorageKey}
    //     ></pr-grid>`,
    //   );
    //   await el.updateComplete;
    //   await elementUpdated(el);
    //   expect(location.href).to.contain("size=25");
    //   // ✅ Restore
    //   HTMLElement.prototype.getBoundingClientRect = original;
    // });
    it("should read pageSize from sessionStorage", async () => {
        sessionStorage.setItem(`grid-${sessionStorageKey}`, JSON.stringify({ pageSize: 25 }));
        const el = await fixture(html `<pr-grid
        .columns=${columns}
        .rows=${rows}
        session-storage-key=${sessionStorageKey}
      ></pr-grid>`);
        await el.updateComplete;
        expect(el.pageSize).to.equal(25);
    });
    it("page and page size from URL sets sessionStorage", async () => {
        // ✅ Set URL BEFORE component loads
        const url = "?sort=lastName&order=asc&page=2&size=25";
        history.pushState(null, "", `${location.pathname}${url}`);
        sessionStorage.setItem(`grid-${sessionStorageKey}`, JSON.stringify({
            pageSize: 10,
        }));
        // 🔥 Mock width BEFORE lifecycle runs
        const original = HTMLElement.prototype.getBoundingClientRect;
        HTMLElement.prototype.getBoundingClientRect = () => ({ width: 100 });
        const el = await fixture(html `<pr-grid
        .columns=${columns}
        .rows=${rows}
        .readParamsFromURL=${true}
        session-storage-key=${sessionStorageKey}
      ></pr-grid>`);
        await el.updateComplete;
        await elementUpdated(el);
        const sessionData = JSON.parse(sessionStorage.getItem(`grid-${sessionStorageKey}`) || "{}");
        expect(sessionData.pageSize).to.equal(25);
        // ✅ Restore
        HTMLElement.prototype.getBoundingClientRect = original;
    });
    it("should set sort, order, page, page size and filters in the URL when addParamsToURL is set to true", async () => {
        const columnsWithFilters = [
            {
                name: "firstName",
                header: "First name",
                filterable: true,
                dataType: "string",
                filterOperators: ["contains", "equals"],
            },
            {
                name: "lastName",
                header: "Last Name",
                filterable: true,
                dataType: "string",
                filterOperators: ["equals"],
            },
            {
                name: "createdDate",
                header: "Created Date",
                filterable: true,
                dataType: "dateTime",
                filterOperators: ["equals"],
            },
        ];
        const existingSearchParams = "?realUsername=Earl&userAge=30";
        history.pushState(null, "", `${location.pathname}${existingSearchParams}`);
        const el = await fixture(html `<pr-grid
        .columns=${columnsWithFilters}
        .addParamsToURL=${true}
        session-storage-key=${sessionStorageKey}
      ></pr-grid>`);
        const rowFilter = el.shadowRoot?.querySelector("pr-grid-row-filter");
        rowFilter.dispatchEvent(new CustomEvent("rowFilter", {
            detail: {
                filters: [
                    {
                        columnField: "firstName",
                        operatorValue: "contains",
                        value: "test",
                    },
                    {
                        columnField: "createdDate",
                        operatorValue: "equals",
                        value: "2024-10-10",
                    },
                ],
            },
            bubbles: true,
            composed: true,
        }));
        el.sortedColumn = "firstName";
        el.sortDirection = "desc";
        const pagination = el.shadowRoot?.querySelector("pr-pagination");
        pagination.dispatchEvent(new CustomEvent("updatePagination", {
            detail: {
                page: 3,
                pageSize: 5,
            },
            bubbles: true,
            composed: true,
        }));
        expect(location.search).to.be.eq(`${existingSearchParams}&sort=firstName&order=desc&page=3&size=5&firstName_contains=test&createdDate_equals=2024-10-10`);
    });
    describe("PrGrid updateSort", () => {
        it("should update URL with sort, order, page, pageSize, filters", async () => {
            history.replaceState(null, "", "/?userId=123&token=abc");
            const updateSortColumns = [
                {
                    name: "name",
                    header: "Name",
                    filterable: true,
                    filterOperators: ["contains"],
                    sortable: true,
                },
            ];
            const el = await fixture(html `
        <pr-grid
          .columns=${updateSortColumns}
          .rows=${[]}
          .addParamsToURL=${true}
          .preservedQueryParamKeys=${["userId", "token"]}
          session-storage-key=${sessionStorageKey}
        ></pr-grid>
      `);
            await el.updateComplete;
            await el.handleSort("name");
            const url = new URL(window.location.href);
            const { searchParams } = url;
            expect(searchParams.get("sort")).to.equal("name");
            expect(searchParams.get("order")).to.equal("asc");
            expect(searchParams.get("page")).to.equal("1");
            expect(searchParams.get("size")).to.equal("10");
            expect(searchParams.get("userId")).to.equal("123");
            expect(searchParams.get("token")).to.equal("abc");
        });
    });
    describe("PrGrid LocalStorage Persistence", () => {
        beforeEach(() => {
            localStorage.clear();
        });
        it("should reset localStorage value if columns length does not match", async () => {
            const tempEl = await fixture(html `<pr-grid .columns=${columns} localStorageID="testGrid"></pr-grid>`);
            const localStorageKey = tempEl.columnsLocalStorageKey;
            // Simulating a user fully deleting and adding a fake column to their local storage
            localStorage.setItem(localStorageKey, JSON.stringify([{ name: "six", header: "six" }]));
            const el = await fixture(html `<pr-grid .columns=${columns} localStorageID="testGrid"></pr-grid>`);
            await el.updateComplete;
            const storedColumns = JSON.parse(localStorage.getItem(el.columnsLocalStorageKey) || "[]");
            expect(storedColumns.length).to.equal(columns.length);
            expect(storedColumns.map((c) => c.name)).to.deep.equal(columns.map((c) => c.name));
        });
        it("should reset localStorage value if it contains a column that does not exist in the provided columns", async () => {
            const tempEl = await fixture(html `<pr-grid .columns=${columns} localStorageID="testGrid"></pr-grid>`);
            const localStorageKey = tempEl.columnsLocalStorageKey;
            // Simulating a user adding an additional column to local storage
            localStorage.setItem(localStorageKey, JSON.stringify([
                ...columns,
                { name: "nonexistent", header: "Nonexistent" },
            ]));
            const el = await fixture(html `<pr-grid .columns=${columns} localStorageID="testGrid"></pr-grid>`);
            await el.updateComplete;
            const storedColumns = JSON.parse(localStorage.getItem(el.columnsLocalStorageKey) || "[]");
            expect(storedColumns.length).to.equal(columns.length);
            expect(storedColumns.map((c) => c.name)).to.deep.equal(columns.map((c) => c.name));
        });
        it("should delete localStorage if a provided column does not exist in localStorage and not create new local storage", async () => {
            const initialColumns = columns.slice(0, -1);
            const tempEl = await fixture(html `<pr-grid
          .columns=${initialColumns}
          localStorageID="testGrid"
        ></pr-grid>`);
            const localStorageKey = tempEl.columnsLocalStorageKey;
            // Simulating a user deleting most columns from local storage
            localStorage.setItem(localStorageKey, JSON.stringify(initialColumns));
            const el = await fixture(html `<pr-grid .columns=${columns} localStorageID="testGrid"></pr-grid>`);
            await el.updateComplete;
            expect(localStorage.getItem(el.columnsLocalStorageKey)).to.equal(null);
        });
        it("should reorder columns based on table header flex order", async () => {
            const el = await fixture(html `
        <pr-grid
          .columns=${columns}
          .rows=${rows}
          localStorageID="testGrid"
        ></pr-grid>
      `);
            await el.updateComplete;
            const orderMap = [2, 0, 1];
            const fakeHeaders = orderMap.map((order) => {
                const th = document.createElement("th");
                th.style.order = order.toString();
                return th;
            });
            // ✅ Mock ONLY the method, not shadowRoot
            const shadowRoot = el.grid.shadowRoot;
            const originalQuery = shadowRoot.querySelectorAll;
            shadowRoot.querySelectorAll = () => fakeHeaders;
            await el.reorderColumnsFromTable();
            const storedColumns = JSON.parse(localStorage.getItem(el.columnsLocalStorageKey) || "[]");
            const expectedOrder = [columns[1], columns[2], columns[0]];
            expect(storedColumns.map((c) => c.name)).to.deep.equal(expectedOrder.map((c) => c.name));
            // ✅ Restore (important)
            shadowRoot.querySelectorAll = originalQuery;
        });
        it("should reorder columns when a filter reorder event is triggered", async () => {
            const el = await fixture(html `<pr-grid .columns=${columns} localStorageID="testGrid"></pr-grid>`);
            await el.updateComplete;
            const reorderedColumns = [columns[2], columns[0], columns[1]];
            const event = new CustomEvent("columnFilter", {
                detail: { reorderedColumns },
                bubbles: true,
                composed: true,
            });
            el.reorderColumnsFromFilter(event);
            await el.updateComplete;
            const storedColumns = JSON.parse(localStorage.getItem(el.columnsLocalStorageKey) || "[]");
            expect(el.displayColumns.map((c) => c.name)).to.deep.equal(reorderedColumns.map((c) => c.name));
            expect(storedColumns.map((c) => c.name)).to.deep.equal(reorderedColumns.map((c) => c.name));
        });
    });
    describe("PrGrid handlePopState", () => {
        const handlePopStateColumns = [
            {
                name: "customcolumnfilter",
                header: "Custom",
                filterable: true,
                filterOperators: ["contains"],
            },
            {
                name: "id",
                header: "ID",
                filterable: true,
                filterOperators: ["equals"],
            },
        ];
        it("should handle empty sort/order/page/size in URL", async () => {
            history.replaceState(null, "", "/?sort=&order=&page=&size=");
            const el = await fixture(html `
        <pr-grid
          .columns=${handlePopStateColumns}
          .rows=${[]}
          .readParamsFromURL=${true}
        ></pr-grid>
      `);
            await el.updateComplete;
            const changeEventPromise = oneEvent(el, "change");
            window.dispatchEvent(new PopStateEvent("popstate"));
            const event = await changeEventPromise;
            expect(el.sortedColumn).to.equal("");
            expect(el.sortDirection).to.equal("");
            expect(el.page).to.equal(1);
            expect(el.pageSize).to.equal(10);
            expect(event.detail.filters).to.deep.equal({});
        });
        it("should handle valid sort/order/page/size in URL", async () => {
            history.replaceState(null, "", "/?sort=id&order=desc&page=1&size=20");
            // 🔥 Mock width BEFORE component lifecycle
            const original = HTMLElement.prototype.getBoundingClientRect;
            HTMLElement.prototype.getBoundingClientRect = () => ({ width: 100 });
            const el = await fixture(html `
        <pr-grid
          .columns=${handlePopStateColumns}
          .rows=${[]}
          .readParamsFromURL=${true}
        ></pr-grid>
      `);
            await el.updateComplete;
            const changeEventPromise = oneEvent(el, "change");
            window.dispatchEvent(new PopStateEvent("popstate"));
            const event = await changeEventPromise;
            expect(el.sortedColumn).to.equal("id");
            expect(el.sortDirection).to.equal("desc");
            expect(el.page).to.equal(1);
            expect(el.pageSize).to.equal(20);
            expect(event.detail.filters).to.deep.equal({});
            // ✅ restore
            HTMLElement.prototype.getBoundingClientRect = original;
        });
        it("should update filters from URL with custom filter", async () => {
            history.replaceState(null, "", "/?customcolumnfilter_contains=foobar");
            const el = await fixture(html `
        <pr-grid
          .columns=${handlePopStateColumns}
          .rows=${[]}
          .readParamsFromURL=${true}
        ></pr-grid>
      `);
            await el.updateComplete;
            const changeEventPromise = oneEvent(el, "change");
            window.dispatchEvent(new PopStateEvent("popstate"));
            const event = await changeEventPromise;
            expect(event.detail.filters).to.deep.equal({
                customcolumnfilter: "foobar",
            });
        });
        it("should dispatch a change event with correct detail", async () => {
            history.replaceState(null, "", "/?sort=id&order=desc&page=1&size=20&customcolumnfilter_contains=foobar");
            // 🔥 Mock width
            const original = HTMLElement.prototype.getBoundingClientRect;
            HTMLElement.prototype.getBoundingClientRect = () => ({ width: 100 });
            const el = await fixture(html `
        <pr-grid
          .columns=${handlePopStateColumns}
          .rows=${[]}
          .readParamsFromURL=${true}
        ></pr-grid>
      `);
            await el.updateComplete;
            const changeEventPromise = oneEvent(el, "change");
            window.dispatchEvent(new PopStateEvent("popstate"));
            const event = await changeEventPromise;
            expect(event.detail).to.include({
                columnName: "id",
                sortOrder: "desc",
                page: 1,
                pageSize: 20,
            });
            expect(event.detail.filters).to.deep.equal({
                customcolumnfilter: "foobar",
            });
            expect(event.detail.filtersOperators).to.deep.equal([
                {
                    columnField: "customcolumnfilter",
                    operator: "contains",
                },
            ]);
            // ✅ restore
            HTMLElement.prototype.getBoundingClientRect = original;
        });
    });
});
