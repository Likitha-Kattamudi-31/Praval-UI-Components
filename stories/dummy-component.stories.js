import { html } from 'lit';
import '../packages/dummy-component/dist/src/dummy-component.js';

export default {
  title: 'Praval/Dummy Component',
  component: 'dummy-component',
  argTypes: {
    title: { control: 'text' },
    highlight: { control: 'boolean' },
    link: { control: 'text' },
  },
};

const Template = ({ title, highlight, link }) => html`
  <dummy-component
    .title=${title}
    ?highlight=${highlight}
    .link=${link}
  >
    This is projected slot content.
  </dummy-component>
`;

export const Default = Template.bind({});
Default.args = {
  title: 'Dummy Card',
  highlight: false,
  link: undefined,
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  title: 'Highlighted Card',
  highlight: true,
  link: undefined,
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: 'Card With Link',
  highlight: false,
  link: 'https://example.com',
};

export const HighlightedWithLink = Template.bind({});
HighlightedWithLink.args = {
  title: 'Highlighted + Link',
  highlight: true,
  link: 'https://example.com',
};
