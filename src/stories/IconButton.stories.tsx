import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import IconButton from "@/components/IconButton";
import Icons from "@/styles/iconography";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof IconButton.Primary | typeof IconButton.Ghost> = {
  title: "Components/IconButton",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "xSmall"],
      control: { type: "radio" },
    },
    icon: {
      options: ["photo", "arrow"],
      mapping: {
        photo: Icons.photo,
        arrow: Icons.arrow,
      },
      control: { type: "radio" },
    },
    ...disableProperty("action"),
  },
};

export default meta;
type Story = StoryObj<typeof IconButton.Primary | typeof IconButton.Ghost>;

export const Primary: Story = {
  args: {
    size: "small",
    disabled: false,
    icon: Icons.arrow,
    action: fn(),
  },
  render: function Render(args) {
    return <IconButton.Primary {...args} />;
  },
};

export const Ghost: Story = {
  args: {
    size: "small",
    disabled: false,
    icon: Icons.photo,
    action: fn(),
  },
  render: function Render(args) {
    return <IconButton.Ghost {...args} />;
  },
};
