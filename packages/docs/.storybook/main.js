module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
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