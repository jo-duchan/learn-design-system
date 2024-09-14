import type { Meta, StoryObj } from "@storybook/react";
import FAB from "@/components/FAB";
import Icons from "@/styles/iconography";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof FAB.Button> = {
  title: "Components/FAB",
  component: FAB.Button,
  argTypes: {
    ...disableProperty("icon"),
    ...disableProperty("showFeedback"),
    ...disableProperty("fixedPosition"),
  },
};

export default meta;
type Story = StoryObj<typeof FAB.Button>;

export const Button: Story = {
  args: {
    icon: <Icons.letter />,
    label: "응원 카드 보내기",
    showFeedback: false,
    fixedPosition: false,
  },
  render: function Render(args) {
    const handleClick = () => {
      alert("클릭!!");
    };
    return <FAB.Button {...args} action={handleClick} />;
  },
};
