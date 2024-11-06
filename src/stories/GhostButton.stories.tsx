import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import GhostButton from "@/components/GhostButton";
import { disableProperty } from "@/utils/storybook-control-util";

type MetaType = typeof GhostButton.Primary | typeof GhostButton.Neutral;

const meta: Meta<MetaType> = {
  title: "Components/GhostButton",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
    ...disableProperty("action"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "medium",
    disabled: false,
    label: "Label",
    action: fn(),
  },
  render: function Render(args) {
    return <GhostButton.Primary {...args} />;
  },
};

export const Neutral: Story = {
  args: {
    size: "medium",
    disabled: false,
    label: "Label",
    action: fn(),
  },
  render: function Render(args) {
    return <GhostButton.Neutral {...args} />;
  },
};
