import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/styles/theme";
import GlobalStyle from "../src/styles/common";
import { surface } from "../src/styles/tokens/alias";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: surface[10],
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Components", "*", "GhostButton", ["Primary", "Neutral"]],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone14pro",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
