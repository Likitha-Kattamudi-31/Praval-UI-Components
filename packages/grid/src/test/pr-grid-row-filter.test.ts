/* eslint-disable no-restricted-globals */
import { aTimeout, elementUpdated, fixture } from "@open-wc/testing";
import { expect } from "vitest";
import { html } from "lit";
// import sinon from 'sinon';
import { Filter, PrGridRowFilter } from "../components/PrGridRowFilter.js";
import { describe, it, vi } from "vitest";

const columns = [
  {
    name: "firstName",
    header: "First name",
    filterable: true,
    filterOperators: ["contains", "equals"],
  },
  {
    name: "lastName",
    header: "Last name",
    filterable: true,
    filterOperators: ["contains", "equals"],
  },
  {
    name: "middleName",
    header: "Middle name",
    filterable: false,
    filterOperators: ["contains", "equals"],
  },
  {
    name: "email",
    header: "Email",
    filterable: true,
    filterOperators: ["contains", "equals"],
  },
];

const filters: Filter[] = [
  {
    columnField: "firstName",
    operatorValue: "contains",
    value: "John",
  },
];

describe("PrGridRowFilter", () => {
  it("should render the grid row filter", async () => {
    const el = await fixture(
      html`<pr-grid-row-filter .columns=${columns}></pr-grid-row-filter>`,
    );

    expect(el).to.be.instanceOf(PrGridRowFilter);
  });

  it("renders and popluates the grid row filter", async () => {
    const el = await fixture(
      html`<pr-grid-row-filter
        .columns=${columns}
        .filters=${filters}
      ></pr-grid-row-filter>`,
    );

    const openMenu = el.shadowRoot?.querySelector(
      ".filter-button",
    ) as HTMLInputElement;

    openMenu.click();

    await elementUpdated(el);

    const columnOptions = el.shadowRoot?.querySelectorAll(
      'select[data-v="firstName"] option',
    );

    expect(columnOptions?.length).to.equal(3);

    const filterOperatorInput = el.shadowRoot?.querySelector(
      "select.filterOperatorInput",
    ) as HTMLSelectElement;

    filterOperatorInput.value = "equals";

    filterOperatorInput.dispatchEvent(
      new Event("change", {
        bubbles: true,
        cancelable: true,
      }),
    );

    await elementUpdated(el);

    const selectedOperator = filterOperatorInput.querySelector(
      "option[selected]",
    ) as HTMLOptionElement;

    expect(selectedOperator?.value).to.equal("equals");
  });

  it("should debounce the filter input", async () => {
    const debounceTime = 100;
    const el = await fixture(
      html`<pr-grid-row-filter
        .columns=${columns}
        .filters=${filters}
        .filterValueChangeDebounceTime=${debounceTime}
      ></pr-grid-row-filter>`,
    );

    const openMenu = el.shadowRoot?.querySelector(
      ".filter-button",
    ) as HTMLInputElement;

    openMenu.click();

    await elementUpdated(el);

    const filterInput = el.shadowRoot?.querySelector(
      "div.filterValueField input",
    ) as HTMLInputElement;

    const debouncedOnFilterValueChangeSpy = vi.spyOn(
      el,
      <any>"debouncedOnFilterValueChange",
    );
    const onFilterValueChangeSpy = vi.spyOn(el, <any>"onfilterValueChange");

    for (let i = 0; i < 5; i += 1) {
      filterInput.dispatchEvent(
        new InputEvent("input", {
          bubbles: true,
          cancelable: true,
          composed: true,
        }),
      );
    }
    expect(debouncedOnFilterValueChangeSpy).toHaveBeenCalled();
    expect(onFilterValueChangeSpy).not.toHaveBeenCalled();

    await aTimeout(debounceTime);

    expect(onFilterValueChangeSpy).toHaveBeenCalledTimes(1);
  });

  describe("Filter type input", () => {
    it("should render a string input control for non-supplied data type", async () => {
      const columnsWithDataType = [
        {
          name: "firstName",
          header: "First name",
          filterable: true,
        },
      ];
      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const filterInput = el.shadowRoot?.querySelector(
        "div.filterValueField input",
      );
      expect(filterInput).to.exist;
      expect(filterInput).to.be.instanceOf(HTMLInputElement);
    });

    it("should render a string input control for string data type", async () => {
      const columnsWithDataType = [
        {
          name: "firstName",
          header: "First name",
          filterable: true,
          dataType: "string",
        },
      ];
      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const filterInput = el.shadowRoot?.querySelector(
        "div.filterValueField input",
      );
      expect(filterInput).to.exist;
      expect(filterInput).to.be.instanceOf(HTMLInputElement);
    });

    it("should render a date input control for dateTime data type", async () => {
      const columnsWithDataType = [
        {
          name: "createdDate",
          header: "Created Date",
          filterable: true,
          dataType: "dateTime",
        },
      ];
      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const dateInput = el.shadowRoot?.querySelector(
        'div.filterValueField input[type="date"]',
      );
      expect(dateInput).to.exist;
      expect(dateInput).to.be.instanceOf(HTMLElement);
    });

    it("should render nothing when an unknown data type is used", async () => {
      const columnsWithDataType = [
        {
          name: "unknownTypeField",
          header: "Unknown Type",
          filterable: true,
          dataType: "unknownType",
        },
      ];
      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const inputField = el.shadowRoot?.querySelector(
        "div.filterValueField input",
      );
      expect(inputField).to.be.null;
    });

    it("should build filter from URL when readParamsFromURL is True", async () => {
      const columnsWithDataType = [
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

      const el = (await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
          .readParamsFromURL=${true}
        ></pr-grid-row-filter>`,
      )) as any;

      const url = "firstName_contains=John&createdDate_equals=2021-09-01";

      history.pushState(null, "", `${location.pathname}?${url}`);
      el.firstUpdated();

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const formFilters = el.shadowRoot?.querySelectorAll(".filter-form");

      const filter1Name = formFilters[0]
        .querySelector(".filterColumnField")
        .querySelector("select")
        .attributes.getNamedItem("data-v")?.value;
      const filter1Operator = formFilters[0]
        .querySelector(".filterOperatorField")
        .querySelector("select")
        .attributes.getNamedItem("data-v")?.value;
      const filter1Value = formFilters[0]
        .querySelector(".filterValueField")
        .querySelector("input").value;

      const filter2Name = formFilters[1]
        .querySelector(".filterColumnField")
        .querySelector("select")
        .attributes.getNamedItem("data-v")?.value;
      const filter2Operator = formFilters[1]
        .querySelector(".filterOperatorField")
        .querySelector("select")
        .attributes.getNamedItem("data-v")?.value;
      const filter2Value = formFilters[1]
        .querySelector(".filterValueField")
        .querySelector("input").value;

      expect(formFilters.length).to.be.eq(2);
      expect(filter1Name).to.be.eq("firstName");
      expect(filter1Operator).to.be.eq("contains");
      expect(filter1Value).to.be.eq("John");
      expect(filter2Name).to.be.eq("createdDate");
      expect(filter2Operator).to.be.eq("equals");
      expect(filter2Value).to.be.eq("2021-09-01");
    });

    it("should use maxDate for date inputs if provided", async () => {
      const columnsWithDataType = [
        {
          name: "dateField",
          header: "Date Field",
          filterable: true,
          filterOperators: ["="],
          dataType: "dateTime",
        },
      ];
      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
          .maxDate=${"2025-12-31"}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const dateInput = el.shadowRoot?.querySelector(
        'div.filterValueField input[type="date"]',
      );
      expect(dateInput).to.exist;
      expect(dateInput?.getAttribute("max")).to.equal("2025-12-31");
    });

    it("should fallback to default maxDate if maxDate is not provided", async () => {
      const columnsWithDataType = [
        {
          name: "dateField",
          header: "Date Field",
          filterable: true,
          filterOperators: ["="],
          dataType: "dateTime",
        },
      ];
      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const dateInput = el.shadowRoot?.querySelector(
        'div.filterValueField input[type="date"]',
      );
      expect(dateInput).to.exist;
      const today = new Date().toISOString().split("T")[0];
      expect(dateInput?.getAttribute("max")).to.equal(today);
    });

    it('should render ix-date-next if "useNewDatePicker" is true', async () => {
      const columnsWithDataType = [
        {
          name: "dateField",
          header: "Date Field",
          filterable: true,
          filterOperators: ["="],
          dataType: "dateTime",
        },
      ];

      const el = await fixture(
        html`<pr-grid-row-filter
          .columns=${columnsWithDataType}
          .useNewDatePicker=${true}
        ></pr-grid-row-filter>`,
      );

      const openMenu = el.shadowRoot?.querySelector(
        ".filter-button",
      ) as HTMLElement;
      openMenu?.click();
      await elementUpdated(el);

      const dateInput = el.shadowRoot?.querySelector(
        'div.filterValueField input[type="date"]',
      );
      expect(dateInput).to.exist;
    });
  });
});
