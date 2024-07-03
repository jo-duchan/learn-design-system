import type { Meta, StoryObj } from "@storybook/react";
import Writer from "@/components/Writer";

const unknown1 =
  "https://mock-design-system-1.s3.ap-northeast-2.amazonaws.com//user-unknown-1.png";
const admin =
  "https://mock-design-system-1.s3.ap-northeast-2.amazonaws.com/user-admin.png";
const newneek =
  "https://mock-design-system-1.s3.ap-northeast-2.amazonaws.com//user-newneek.png";

const meta: Meta<typeof Writer> = {
  component: Writer,
};

export default meta;
type Story = StoryObj<typeof Writer>;

export const Default: Story = {
  argTypes: {
    profile: {
      control: {
        type: "select",
      },
      options: ["unknown1", "admin", "newneek"],
      mapping: {
        unknown1: unknown1,
        admin: admin,
        newneek: newneek,
      },
    },
  },
  args: {
    connected: false,
    profile: "newneek",
    name: "뉴닉",
    level: "admin",
    loginId: "@newneek",
  },
};
