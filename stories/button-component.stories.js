import { html, nothing } from 'lit';
import '../packages/button/dist/pr-button.js';
// import '../packages/ix-button/dist/ix-button.js';
import '../packages/icon/dist/pr-icon.js';
import { defaultStoryLayout } from './story-helpers.js';

export default {
  title: 'Praval/pr-button',
  component: 'pr-button',
  enableShortcuts: false,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'This is a custom button built with Lit.',
      },
    },
  },
  decorators: [defaultStoryLayout], // Add custom styling around the story
  argTypes: {
    slot: { control: 'text' },
    disabled: { control: 'boolean' },
    appearance: {
      control: 'select',
      options: [
        'elevated',
        'filled',
        'filled-tonal',
        'outlined',
        'text',
      ],
    },
   
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = ({
  slot = 'Submit',
  appearance = 'filled',
  disabled,
  href,
  target,
  onClick
}) => html`
  <pr-button
    target=${target}
    appearance=${appearance}
    ?disabled=${disabled}
    href=${href}
    aria-label="pr-button example"
    role=${href ? 'link' : 'button'}
    @click=${onClick}
  >
    ${slot}
  </pr-button>
`;

export const Default = Template.bind({});

export const Elevated = Template.bind({});
Elevated.args = {
  appearance: 'elevated',
};
export const Filled = Template.bind({});
Filled.args = {
  appearance: 'filled',
};
export const FilledTonal = Template.bind({});
FilledTonal.args = {
  appearance: 'filled-tonal',
};
export const Outlined = Template.bind({});
Outlined.args = {
  appearance: 'outlined',
};
export const Text = Template.bind({});
Text.args = {
  appearance: 'text',
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

