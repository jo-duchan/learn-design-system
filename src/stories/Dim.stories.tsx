import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Dim from "@/components/Dim";
import { demo } from "@/assets/aws-s3-assets";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const meta: Meta<typeof Dim> = {
  title: "Components/Dim",
  component: Dim,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
        <img src={demo.screen1} alt="데모 화면" />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dim>;

export const Default: Story = {
  args: {
    visible: true,
  },
};
