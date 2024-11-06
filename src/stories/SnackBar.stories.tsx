import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import SnackBar from "@/components/SnackBar";
import GhostButton from "@/components/GhostButton";
import IconButton from "@/components/IconButton";
import Icons from "@/styles/iconography";
import { disableProperty } from "@/utils/storybook-control-util";
import { useEffect } from "react";

const meta: Meta<typeof SnackBar> = {
  title: "Components/SnackBar",
  component: SnackBar,
  argTypes: {
    ...disableProperty("button"),
    ...disableProperty("width"),
  },
};

export default meta;
type Story = StoryObj<typeof SnackBar>;

export const WithGhostButton: Story = {
  args: {
    isShow: false,
    width: "361px",
    text: "글을 저장했어요",
    button: (
      <GhostButton.Primary
        size="small"
        label="보기"
        action={() => alert("클릭!!")}
      />
    ),
  },
  render: function Render(args) {
    const [{ isShow }, updateArgs] = useArgs();

    useEffect(() => {
      updateArgs({ isShow: true });

      return () => {
        updateArgs({ isShow: false });
      };
    }, []);
    return <SnackBar {...args} isShow={isShow} />;
  },
};

export const WithIconButton: Story = {
  args: {
    isShow: false,
    width: "361px",
    text: "글을 저장했어요",
    button: (
      <IconButton.Ghost
        size="small"
        icon={Icons.photo}
        action={() => alert("클릭!!")}
      />
    ),
  },
  render: function Render(args) {
    const [{ isShow }, updateArgs] = useArgs();

    useEffect(() => {
      updateArgs({ isShow: true });

      return () => {
        updateArgs({ isShow: false });
      };
    }, []);
    return <SnackBar {...args} isShow={isShow} />;
  },
};
