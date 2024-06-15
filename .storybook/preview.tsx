import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/styles/theme";
import GlobalStyle from "../src/styles/common";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1A1919",
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
