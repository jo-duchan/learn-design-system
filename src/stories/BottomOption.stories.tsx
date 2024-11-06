import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import styled from "styled-components";
import BottomSheet from "@/components/BottomSheet";
import { useEffect } from "react";

const optionData = [
  {
    name: "feed1",
    label: "피드",
  },
  {
    name: "feed2",
    label: "피드",
  },
];

const StoryLayout = styled.div`
  overflow: hidden;
`;

const meta: Meta<typeof BottomSheet.Option> = {
  title: "Components/BottomSheet",
  component: BottomSheet.Option,
};

export default meta;
type Story = StoryObj<typeof BottomSheet.Option>;

export const Option: Story = {
  args: {
    isShow: false,
    title: "새 글 쓰기",
    list: optionData,
  },
  render: function Render(args) {
    const [{ isShow }, updateArgs] = useArgs();

    useEffect(() => {
      updateArgs({ isShow: true });

      return () => {
        updateArgs({ isShow: false });
      };
    }, []);

    return (
      <StoryLayout>
        <BottomSheet.Option
          {...args}
          isShow={isShow}
          onClose={() => updateArgs({ isShow: false })}
        />
      </StoryLayout>
    );
  },
};
