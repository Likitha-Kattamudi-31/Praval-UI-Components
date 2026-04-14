import { html } from 'lit';
import '../packages/card/dist/card-component.js';

export default {
  title: 'Praval/Card Component',
  component: 'card-component',
  argTypes: {
    title: { control: 'text' },
    highlight: { control: 'boolean' },
    link: { control: 'text' },
  },
};

const Template = ({ title, highlight, link }) => html`
  <card-component
    .title=${title}
    ?highlight=${highlight}
    .link=${link}
  >
    This is projected slot content.
  </card-component>
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
