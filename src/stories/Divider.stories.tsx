import type { Meta, StoryObj } from "@storybook/react";
import Divider from "@/components/Divider";

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    style: "default",
  },
};

export const Strong: Story = {
  args: {
    style: "strong",
  },
};

export const Navigation: Story = {
  args: {
    style: "navigation",
  },
};
