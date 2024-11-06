import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import Divider from "@/components/Divider";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 16px;
`;

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    style: "default",
  },
};

export const Strong: Story = {
  args: {
    style: "strong",
  },
};

export const Navigation: Story = {
  args: {
    style: "navigation",
  },
};
