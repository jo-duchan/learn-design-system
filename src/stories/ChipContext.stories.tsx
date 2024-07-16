import type { Meta, StoryObj } from "@storybook/react";
import ChipContext from "@/components/ChipContext";

const meta: Meta<typeof ChipContext> = {
  title: "Components/ChipSeries",
  component: ChipContext,
};

export default meta;
type Story = StoryObj<typeof ChipContext>;

export const Context: Story = {
  args: {
    label: "Label",
  },
};
