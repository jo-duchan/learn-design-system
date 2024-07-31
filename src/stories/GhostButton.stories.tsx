import type { Meta, StoryObj } from "@storybook/react";
import GhostButton from "@/components/GhostButton";

type GhostButton = typeof GhostButton.Primary | typeof GhostButton.Neutral;

const meta: Meta<GhostButton> = {
  title: "Components/GhostButton",
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
    },
    status: {
      options: ["enabled", "disabled"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<GhostButton>;

export const Primary: Story = {
  args: {
    size: "medium",
    status: "enabled",
    label: "Label",
    action: () => {},
  },
  render: function Render(args) {
    return <GhostButton.Primary {...args} />;
  },
};

export const Neutral: Story = {
  args: {
    size: "medium",
    status: "enabled",
    label: "Label",
    action: () => {},
  },
  render: function Render(args) {
    return <GhostButton.Neutral {...args} />;
  },
};
