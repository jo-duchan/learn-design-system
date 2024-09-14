import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FAB from "@/components/FAB";
import Icons from "@/styles/iconography";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof FAB.Group> = {
  title: "Components/FAB",
  component: FAB.Group,
  argTypes: {
    ...disableProperty("children"),
    ...disableProperty("fixedPosition"),
  },
};

export default meta;
type Story = StoryObj<typeof FAB.Group>;

export const Group: Story = {
  args: {
    fixedPosition: false,
  },
  render: function Render(args) {
    const [heartNum, setHeartNum] = useState(900);
    const [chatBubbleNum, setChatBubbleNum] = useState(900);
    const [shareNum, setShareNum] = useState(900);
    const handleClick = () => {
      alert("클릭!!");
    };
    return (
      <FAB.Group {...args}>
        <FAB.GroupItem
          icon={<Icons.heart />}
          label={heartNum.toString()}
          action={(bool) => {
            if (!bool) {
              setHeartNum(heartNum + 1);
            } else {
              setHeartNum(heartNum - 1);
            }
          }}
          showFeedback
        />
        <FAB.GroupItem
          icon={<Icons.chatBubble />}
          label="999"
          action={(bool) => {
            if (!bool) {
              setChatBubbleNum(chatBubbleNum + 1);
            } else {
              setChatBubbleNum(chatBubbleNum - 1);
            }
          }}
          showFeedback
        />
        <FAB.GroupItem
          icon={<Icons.share />}
          label={chatBubbleNum.toString()}
          action={handleClick}
        />
        <FAB.GroupItem
          icon={<Icons.share />}
          label={shareNum.toString()}
          action={(bool) => {
            if (!bool) {
              setShareNum(shareNum + 1);
            } else {
              setShareNum(shareNum - 1);
            }
          }}
          showFeedback
        />
      </FAB.Group>
    );
  },
};
