import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "@/components/IconButton";
import Icons from "@/styles/iconography";

const meta: Meta<typeof IconButton.Primary | typeof IconButton.Ghost> = {
  title: "Components/IconButton",
  argTypes: {
    size: {
      options: ["small", "xSmall"],
      control: { type: "radio" },
    },
    status: {
      options: ["enabled", "pressed", "disabled"],
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
  },
};

export default meta;
type Story = StoryObj<typeof IconButton.Primary | typeof IconButton.Ghost>;

export const Primary: Story = {
  argTypes: {},
  args: {
    size: "small",
    status: "enabled",
    icon: Icons.arrow,
    action: () => {},
  },
  render: function Render(args) {
    return <IconButton.Primary {...args} />;
  },
};

export const Ghost: Story = {
  args: {
    size: "small",
    status: "enabled",
    icon: Icons.photo,
    action: () => {},
  },
  render: function Render(args) {
    return <IconButton.Ghost {...args} />;
  },
};
