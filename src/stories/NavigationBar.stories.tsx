import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar";

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  args: {
    fixedPosition: false,
    fullWidth: false,
    width: 360,
  },
};
