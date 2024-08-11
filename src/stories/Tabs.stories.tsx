import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "@/components/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultIndex: 0,
    labels: ["Label 1", "Label 2", "Label 3"],
    onChange: () => {},
    width: 360,
  },
};
