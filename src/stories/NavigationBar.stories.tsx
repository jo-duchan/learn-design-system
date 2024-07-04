import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import NavigationBar from "@/components/NavigationBar";
import { profile } from "@/assets/aws-s3-assets";

const Container = styled.div`
  position: fixed;
  /* inset: 0; */
  width: 360px;
  height: calc(100% - 2rem);
  overflow: hidden auto;
  background-color: aliceblue;
`;

const DemoImage = styled.img`
  display: block;
  height: 300vh;
`;

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  //   decorators: [
  //     (Story) => (
  //       <Container>
  //         <DemoImage src="https://images.unsplash.com/photo-1719176372344-b29f6613e870?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  //         <Story />
  //       </Container>
  //     ),
  //   ],
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  //   parameters: {
  //     layout: "centered",
  //   },
  args: {
    // connected: false,
    // profile: "newneek",
    // name: "뉴닉",
    // level: "admin",
    // loginId: "@newneek",
  },
};
