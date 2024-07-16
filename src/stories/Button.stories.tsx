import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    style: "primary",
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
};

export const PrimaryLow: Story = {
  args: {
    style: "primary-low",
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
};

export const Neutral: Story = {
  args: {
    style: "neutral",
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
};

export const Inverse: Story = {
  args: {
    style: "inverse",
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
};
