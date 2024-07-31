import type { Meta, StoryObj } from "@storybook/react";
import SnackBar from "@/components/SnackBar";
import GhostButton from "@/components/GhostButton";
import IconButton from "@/components/IconButton";
import Icons from "@/styles/iconography";

const meta: Meta<typeof SnackBar> = {
  title: "Components/SnackBar",
  component: SnackBar,
  argTypes: {
    button: {
      table: {
        disable: true,
      },
    },
    fixedPosition: {
      table: {
        disable: true,
      },
    },
    fullWidth: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SnackBar>;

export const WithGhostButton: Story = {
  args: {
    isShow: false,
    fixedPosition: false,
    fullWidth: false,
    width: 328,
    text: "글을 저장했어요",
    button: (
      <GhostButton.Primary
        status="enabled"
        size="small"
        label="보기"
        action={() => alert("클릭!!")}
      />
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    isShow: false,
    fixedPosition: false,
    fullWidth: false,
    width: 328,
    text: "글을 저장했어요",
    button: (
      <IconButton.Ghost
        status="enabled"
        size="small"
        icon={Icons.photo}
        action={() => alert("클릭!!")}
      />
    ),
  },
};
