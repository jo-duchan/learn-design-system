import type { Meta, StoryObj } from "@storybook/react";
import Writer from "@/components/Writer";
import { profile } from "@/assets/aws-s3-assets";

const meta: Meta<typeof Writer> = {
  title: "Components/Writer",
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
        unknown1: profile.unknown1,
        admin: profile.admin,
        newneek: profile.newneek,
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
