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

export const Variant2: Story = {
  args: {
    style: "variant2",
  },
};

export const Variant3: Story = {
  args: {
    style: "variant3",
  },
};
