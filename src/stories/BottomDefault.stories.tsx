import { useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import styled from "styled-components";
import BottomSheet from "@/components/BottomSheet";
import { disableProperty } from "@/utils/storybook-control-util";

const defaultData = [
  {
    title: "포스트",
    description: "짧은 글로 영감을 나누는 대화를 해요",
    path: "baseUrl/post/postId",
    imgUrl:
      "https://images.unsplash.com/photo-1561041618-b0883669c077?q=80&w=3294&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "웹에서 아티클 쓰기",
    description: "새로운 포맷으로 지식을 연재해요",
    path: "baseUrl/article/articleId",
    imgUrl: "",
  },
];

const StoryLayout = styled.div`
  overflow: hidden;
`;

const meta: Meta<typeof BottomSheet.Default> = {
  title: "Components/BottomSheet",
  component: BottomSheet.Default,
  argTypes: {
    ...disableProperty("width"),
    ...disableProperty("fixedPosition"),
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet.Default>;

export const Default: Story = {
  args: {
    fixedPosition: false,
    width: 320,
    isShow: false,
    title: "새 글 쓰기",
    list: defaultData,
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
        <BottomSheet.Default
          {...args}
          isShow={isShow}
          onClose={() => updateArgs({ isShow: false })}
        />
      </StoryLayout>
    );
  },
};
