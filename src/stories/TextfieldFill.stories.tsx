import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";
import TextfieldFill from "@/components/TextfieldFill";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof TextfieldFill> = {
  title: "Components/Textfield",
  component: TextfieldFill,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TextfieldFill>;

export const Fill: Story = {
  argTypes: {
    ...disableProperty("register"),
    ...disableProperty("name"),
    ...disableProperty("width"),
  },
  args: {
    placeholder: "입력",
    status: "normal",
    width: "361px",
  },
  render: function Render(args) {
    const { register, handleSubmit } = useForm<FieldValues>();

    const handleAlertText: SubmitHandler<FieldValues> = (data) => {
      globalThis.alert(`입력한 텍스트는: ${data.liveDemo}`);
    };
    return (
      <form onSubmit={handleSubmit(handleAlertText)}>
        <TextfieldFill {...args} register={register} name="liveDemo" />
      </form>
    );
  },
};
