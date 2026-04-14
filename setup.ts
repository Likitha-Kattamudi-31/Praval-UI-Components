// setupTests.ts

// ResizeObserver mock (safe)
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Wait until browser env is ready
if (typeof window !== "undefined") {
  (window.HTMLElement.prototype as any).attachInternals = function () {
    return {
      setFormValue: () => {},
    };
  };
}