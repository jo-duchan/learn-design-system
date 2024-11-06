import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@/components/Button";
import { disableProperty } from "@/utils/storybook-control-util";

type MetaType =
  | typeof Button.Primary
  | typeof Button.PrimaryLow
  | typeof Button.Neutral
  | typeof Button.Inverse;

const meta: Meta<MetaType> = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
    ...disableProperty("action"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "medium",
    disabled: false,
    label: "label",
    action: fn(),
  },
  render: function Render(args) {
    return <Button.Primary {...args} />;
  },
};

export const PrimaryLow: Story = {
  args: {
    size: "medium",
    disabled: false,
    label: "label",
    action: fn(),
  },
  render: function Render(args) {
    return <Button.PrimaryLow {...args} />;
  },
};

export const Neutral: Story = {
  args: {
    size: "medium",
    disabled: false,
    label: "label",
    action: fn(),
  },
  render: function Render(args) {
    return <Button.Neutral {...args} />;
  },
};

export const Inverse: Story = {
  args: {
    size: "medium",
    disabled: false,
    label: "label",
    action: fn(),
  },
  render: function Render(args) {
    return <Button.Inverse {...args} />;
  },
};
