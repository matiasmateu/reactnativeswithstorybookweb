const custom = require('../webpack.config.js');
module.exports = {
  "stories": [
    "../storybook/stories/**/*.stories.mdx",
    "../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
};