import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { useArgs } from "@storybook/preview-api";
import NavigationBar from "@/components/NavigationBar";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    ...disableProperty("currentPath"),
    ...disableProperty("onClick"),
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const [{ currentPath }, updateArgs] = useArgs();

    const handleItemClick = (path: string) => {
      updateArgs({ currentPath: path });
    };

    return (
      <>
        <NavigationBar
          {...args}
          currentPath={currentPath}
          onClick={handleItemClick}
        />
        <Indicator />
      </>
    );
  },
};

const Indicator = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 32px;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 220px;
    height: 5px;
    border-radius: 3px;
    background-color: #fff;
    transform: translate3d(-50%, 0, 0);
  }
`;
