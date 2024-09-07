import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";
import BottomReply from "@/components/BottomReply";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof BottomReply> = {
  title: "Components/BottomReply",
  component: BottomReply,
  argTypes: {
    ...disableProperty("fixedPosition"),
    ...disableProperty("fullWidth"),
    ...disableProperty("width"),
    ...disableProperty("register"),
    ...disableProperty("name"),
  },
};

export default meta;
type Story = StoryObj<typeof BottomReply>;

export const Default: Story = {
  args: {
    name: "bottomReply",
    placeholder: "한슬에게 답글 남기기",
    fixedPosition: false,
    fullWidth: false,
    width: 360,
  },
  render: function Render(args) {
    const { register, handleSubmit } = useForm<FieldValues>();
    const handleAlertText: SubmitHandler<FieldValues> = (data) => {
      globalThis.alert(`입력한 텍스트는: ${data.bottomReply}`);
    };
    return (
      <form onSubmit={handleSubmit(handleAlertText)}>
        <BottomReply {...args} register={register} />
      </form>
    );
  },
};
