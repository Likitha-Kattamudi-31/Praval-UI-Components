import { html } from 'lit';
import '../packages/icon/dist/pr-icon.js';

export default {
  title: 'Praval/pr-icon',
  component: 'pr-icon',
  tags: ['autodocs'],
  argTypes: {
    filled: { control: 'boolean', default: false },
  },
};

const Template = ({ filled = false }) => html`
  <style>
    pr-icon {
      --pr-icon-font-size: 32px;
      color: #2d09b1;
      margin-right: 8px;
    }
  </style>

  <h2>Icons / Symbols </h2>

  <pr-icon ?filled=${filled}>home</pr-icon>
  <pr-icon ?filled=${filled}>search</pr-icon>
  <pr-icon ?filled=${filled}>settings</pr-icon>
  <pr-icon ?filled=${filled}>menu</pr-icon>
  <pr-icon ?filled=${filled}>close</pr-icon>

  <h2>Action icons</h2>
  <pr-icon ?filled=${filled}>add</pr-icon>
  <pr-icon ?filled=${filled}>edit</pr-icon>
  <pr-icon ?filled=${filled}>delete</pr-icon>
  <pr-icon ?filled=${filled}>check</pr-icon>
  <pr-icon ?filled=${filled}>refresh</pr-icon>

  <h2>Status icons</h2>
  <pr-icon ?filled=${filled}>check_circle</pr-icon>
  <pr-icon ?filled=${filled}>error</pr-icon>
  <pr-icon ?filled=${filled}>warning</pr-icon>
  <pr-icon ?filled=${filled}>info</pr-icon>

  <h3>aria-hidden = false (announced by screen readers)</h3>
  <pr-icon aria-hidden="false" ?filled=${filled}>favorite</pr-icon>

  <h2>Codepoint example (home / #xe88a)</h2>
  <pr-icon ?filled=${filled}>
    <span aria-label="home">&#xe88a</span>
  </pr-icon>

  <h2>SVG example (does not fill)</h2>
  <pr-icon ?filled=${filled}>
    <svg
      aria-label="paper airplane"
      viewBox="0 0 48 48"
      width="32"
      height="32"
    >
      <path
        d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z"
      />
    </svg>
  </pr-icon>
`;
export const Default = Template.bind({});
Default.args = {
  filled: false,
};
