import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import NavigationBar from "@/components/NavigationBar";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    ...disableProperty("fixedPosition"),
    ...disableProperty("fullWidth"),
    ...disableProperty("width"),
    ...disableProperty("currentPath"),
    ...disableProperty("onClick"),
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  args: {
    fixedPosition: false,
    fullWidth: false,
    width: 360,
  },
  render: function Render(args) {
    const [{ currentPath }, updateArgs] = useArgs();

    const handleItemClick = (path: string) => {
      updateArgs({ currentPath: path });
    };

    // useEffect(() => {
    //   updateArgs({ isShow: true });

    //   return () => {
    //     updateArgs({ isShow: false });
    //   };
    // }, []);
    return (
      <NavigationBar
        {...args}
        currentPath={currentPath}
        onClick={handleItemClick}
      />
    );
  },
};
