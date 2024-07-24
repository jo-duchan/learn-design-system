import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

type MetaType =
  | typeof Button.Primary
  | typeof Button.PrimaryLow
  | typeof Button.Neutral
  | typeof Button.Inverse;

const meta: Meta<MetaType> = {
  title: "Components/Button",
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
    status: {
      options: ["enabled", "pressed", "disabled"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<MetaType>;

export const Primary: Story = {
  args: {
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
  render: function Render(args) {
    return <Button.Primary {...args} />;
  },
};

export const PrimaryLow: Story = {
  args: {
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
  render: function Render(args) {
    return <Button.PrimaryLow {...args} />;
  },
};

export const Neutral: Story = {
  args: {
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
  render: function Render(args) {
    return <Button.Neutral {...args} />;
  },
};

export const Inverse: Story = {
  args: {
    size: "large",
    status: "enabled",
    label: "label",
    action: () => {},
  },
  render: function Render(args) {
    return <Button.Inverse {...args} />;
  },
};
