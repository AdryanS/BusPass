module.exports = {
    stories: [
      '../src/components/**/*.stories.?(ts|tsx|js|jsx)'
    ],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-knobs",
        "@storybook/addon-links",
        "@storybook/addon-ondevice-actions",
        "@storybook/addon-ondevice-knobs",
    ]
  }