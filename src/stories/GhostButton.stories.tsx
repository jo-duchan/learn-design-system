import type { Meta, StoryObj } from "@storybook/react";
import GhostButton from "@/components/GhostButton";

const meta: Meta<typeof GhostButton.Primary | typeof GhostButton.Neutral> = {
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
type Story = StoryObj<typeof GhostButton.Primary | typeof GhostButton.Neutral>;

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
