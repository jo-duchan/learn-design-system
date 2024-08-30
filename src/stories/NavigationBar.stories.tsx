import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    ...disableProperty("fixedPosition"),
    ...disableProperty("fullWidth"),
    ...disableProperty("width"),
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
