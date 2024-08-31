import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import type { Meta, StoryObj } from "@storybook/react";
import TextfieldOutline from "@/components/TextfieldOutline";
import { disableProperty } from "@/utils/storybook-control-util";

const meta: Meta<typeof TextfieldOutline> = {
  title: "Components/Textfield",
  component: TextfieldOutline,
};

export default meta;
type Story = StoryObj<typeof TextfieldOutline>;

export const Outline: Story = {
  argTypes: {
    ...disableProperty("register"),
    ...disableProperty("setValue"),
    ...disableProperty("name"),
    ...disableProperty("fullWidth"),
    ...disableProperty("width"),
  },
  args: {
    label: "Assistant Label",
    placeholder: "입력",
    status: "normal",
  },
  render: function Render(args) {
    const { register, setValue, handleSubmit } = useForm<FieldValues>();

    const handleAlertText: SubmitHandler<FieldValues> = (data) => {
      globalThis.alert(`입력한 텍스트는: ${data.liveDemo}`);
    };
    return (
      <>
        <form onSubmit={handleSubmit(handleAlertText)}>
          <TextfieldOutline
            {...args}
            register={register}
            setValue={setValue}
            name="liveDemo"
          />
        </form>
      </>
    );
  },
};
