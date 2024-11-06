import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tabs from "@/components/Tabs";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ...disableProperty("onChange"),
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultIndex: 0,
    labels: ["Label 1", "Label 2", "Label 3"],
    onChange: fn(),
  },
};
