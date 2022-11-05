import { themes } from "@storybook/theming"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  },
}

export const decorators = [
  (Story) => (
    <div style={{ width: "100%", margin: "3rem" }}>
      <Story />
    </div>
  ),
];