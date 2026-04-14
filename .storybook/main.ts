import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
 stories: [
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.optimizeDeps = {
      include: ['lit']
    };
    return config;
  }
};

export default config;
