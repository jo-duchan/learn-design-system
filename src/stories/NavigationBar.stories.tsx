import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    fixedPosition: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
  },
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
