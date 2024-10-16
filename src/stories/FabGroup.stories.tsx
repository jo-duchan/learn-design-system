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
    const [bookmarkNum, setBookmarkNum] = useState(900);
    const handleClick = () => {
      alert("클릭!!");
    };
    return (
      <FAB.Group {...args}>
        <FAB.GroupItem
          icon={<Icons.heart />}
          feedbackIcon={<Icons.heartActive />}
          label={heartNum.toString()}
          action={(bool) => {
            if (!bool) {
              setHeartNum(heartNum + 1);
            } else {
              setHeartNum(heartNum - 1);
            }
          }}
        />
        <FAB.GroupItem
          icon={<Icons.chatBubble />}
          feedbackIcon={<Icons.chatBubbleActive />}
          label={chatBubbleNum.toString()}
          action={(bool) => {
            if (!bool) {
              setChatBubbleNum(chatBubbleNum + 1);
            } else {
              setChatBubbleNum(chatBubbleNum - 1);
            }
          }}
        />
        <FAB.GroupItem
          icon={<Icons.bookmark />}
          feedbackIcon={<Icons.bookmarkActive />}
          label={bookmarkNum.toString()}
          action={(bool) => {
            if (!bool) {
              setBookmarkNum(bookmarkNum + 1);
            } else {
              setBookmarkNum(bookmarkNum - 1);
            }
          }}
        />
        <FAB.GroupItem
          icon={<Icons.share />}
          label={"999"}
          action={handleClick}
        />
      </FAB.Group>
    );
  },
};
