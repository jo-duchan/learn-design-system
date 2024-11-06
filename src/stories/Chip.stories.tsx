import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import Chip from "@/components/Chip";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof Chip> = {
  title: "Components/ChipSeries",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...disableProperty("action"),
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: "Label",
    focused: false,
  },
  render: function Render(args) {
    const [{ focused }, updateArgs] = useArgs();

    const handleClick = () => {
      updateArgs({ focused: !focused });
    };

    return <Chip {...args} action={handleClick} />;
  },
};
