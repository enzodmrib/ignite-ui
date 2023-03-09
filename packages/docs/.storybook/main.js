module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-ui'
    }

    return config
  }
  // async viteFinal(config) {
  //   return {
  //     ...config,
  //     define: {
  //       ...config.define,
  //       global: "window",
  //     },
  //     esbuild: {
  //       ...config.esbuild,
  //       jsxInject: `import React from 'react'`,
  //     },
  //   };
  // },
};