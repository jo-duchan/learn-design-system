import type { Meta, StoryObj } from "@storybook/react";
import Writer from "@/components/Writer";
import AdminProfile from "@/assets/img/user-newneek.png";

const meta: Meta<typeof Writer> = {
  component: Writer,
};

export default meta;
type Story = StoryObj<typeof Writer>;

export const Default: Story = {
  args: {
    connected: false,
    profile: AdminProfile,
    name: "뉴닉",
    level: "admin",
    loginId: "@newneek",
  },
};
