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
    width: 328,
    fullWidth: false,
  },
};

export const Strong: Story = {
  args: {
    style: "strong",
    width: 328,
    fullWidth: false,
  },
};

export const Navigation: Story = {
  args: {
    style: "navigation",
    width: 328,
    fullWidth: false,
  },
};
