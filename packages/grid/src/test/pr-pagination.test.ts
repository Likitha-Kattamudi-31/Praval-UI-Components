import { html } from "lit";
import { elementUpdated, fixture, oneEvent } from "@open-wc/testing";
// eslint-disable-next-line import/no-duplicates
import "../components/PrPagination.js";
// eslint-disable-next-line import/no-duplicates
// import { PrPagination } from "../components/PrPagination.js";
import { describe, it, expect } from "vitest";
import { PrPagination } from "../components/PrPagination.js";

describe("PrPagination", () => {
  it("renders pagination", async () => {
    const el = await fixture(html`<pr-pagination></pr-pagination>`);

    expect(el).to.not.be.null;
  });

  it("renders pagination page size select", async () => {
    const el = await fixture(
      html`<pr-pagination .pageSizes=${[1, 2, 3]}></pr-pagination>`,
    );
    await elementUpdated(el);

    // const select = el.shadowRoot?.querySelector(
    //   ".pagination__select-input",
    // ) as HTMLSelectElement;
    // const options = select?.querySelectorAll("option");

    // expect(options?.length).to.equal(3);
    const pageSizeSelect = el?.shadowRoot?.querySelectorAll("option");

    expect(pageSizeSelect?.length).to.equal(3);
  });

it("renders pagination range info", async () => {
  const el = await fixture<PrPagination>(
    html`<pr-pagination
      pageSize="10"
      page="2"
      recordCount="99"
    ></pr-pagination>`
  );

  await el.updateComplete;

     await el.updateComplete;

  const pageRangeInfo = el.shadowRoot?.querySelectorAll("p")[1] as HTMLElement;

  const text = pageRangeInfo.textContent?.replace(/\s+/g, " ").trim();

  expect(text).to.equal("11 - 20 of 99");
});

it("calculates new page when page size increases", async () => {
  const el = await fixture(
    html`<pr-pagination
      .pageSizes=${[10, 20, 50, 100]}
      pageSize="50"
      page="5"
      recordCount="600"
    ></pr-pagination>`
  );

  await elementUpdated(el);

  const listener = oneEvent(el, "updatePagination");

  const select = el.shadowRoot?.querySelector("select") as HTMLSelectElement;

  select.value = "100";
  select.dispatchEvent(new Event("change"));

  const event = await listener;

  expect(event.detail.page).to.equal(3);
  expect(event.detail.pageSize).to.equal(100);
});

it("calculates new page when page size decreases", async () => {
  const el = await fixture(
    html`<pr-pagination
      .pageSizes=${[10, 20, 50, 100]}
      pageSize="50"
      page="5"
      recordCount="600"
    ></pr-pagination>`
  );

  await elementUpdated(el);

  const listener = oneEvent(el, "updatePagination");

  const select = el.shadowRoot?.querySelector(
    "select"
  ) as HTMLSelectElement;
  select.value = "20";
  select.dispatchEvent(new Event("change"));

  const event = await listener;

  expect(event.detail.page).to.equal(11);
  expect(event.detail.pageSize).to.equal(20);
});
});
