import { useState, useRef } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { round, surface, text } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";
import Divider from "@/components/Divider";
import IconButton from "@/components/IconButton";
import Icons from "@/styles/iconography";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<FieldValues>;
  name: string;
  fixedPosition: boolean;
  fullWidth: boolean;
  width?: number;
}

interface StyledProps {
  $position: string;
  $bottom: string;
  $left: string;
  $width: string;
}

function BottomReply({
  register,
  name,
  fixedPosition,
  fullWidth,
  width,
  ...props
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textLengthLimit = 300;
  const textareaMaxHeight = 140;
  const [textLength, setTextLength] = useState<number>(0);
  const { ref, onChange, ...rest } = register(name, {
    required: props.required,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;

    if (textarea && textarea.scrollHeight < textareaMaxHeight) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }

    setTextLength(e.target.value.length);
    onChange(e);
  };

  const setWidth = () => {
    if (fullWidth) {
      return "100%";
    }
    return `${width}px`;
  };

  const setPosition = () => {
    let position = "static";
    let bottom = "0";
    let left = "0";

    if (fixedPosition) {
      position = "fixed";
      bottom = "0";
      left = `calc((${window.innerWidth}px - ${setWidth()}) / 2)`;
    }
    return { position, bottom, left };
  };
  return (
    <Container
      $width={setWidth()}
      $position={setPosition().position}
      $bottom={setPosition().bottom}
      $left={setPosition().left}
    >
      <Divider fullWidth style="default" />
      <ReplyWrapper>
        <Textarea
          {...rest}
          ref={(e) => {
            ref(e);
            textareaRef.current = e;
          }}
          onChange={handleChange}
          rows={1}
          maxLength={textLengthLimit}
          placeholder={props.placeholder}
        />
        <ButtonWrapper>
          <IconButton.Ghost
            size="small"
            status="enabled"
            icon={Icons.photo}
            type="button"
          />
          <TextLength>
            {textLength}/{textLengthLimit}
          </TextLength>
          <IconButton.Primary
            size="small"
            status="enabled"
            icon={Icons.arrow}
            type="submit"
          />
        </ButtonWrapper>
      </ReplyWrapper>
    </Container>
  );
}

export default BottomReply;

const Container = styled.div<StyledProps>`
  position: ${({ $position }) => $position};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  width: ${({ $width }) => $width};
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-block: 12px;
  padding-inline: 16px;
`;

const Textarea = styled.textarea`
  resize: none;
  outline: initial;
  border: initial;
  width: 100%;
  min-height: 45px;
  padding-block: 12px;
  padding-inline: 10px;
  border-radius: ${round.s};
  background-color: ${surface[20]};
  ${textStyles.body2.regular14};
  color: ${text[10]};
  transition: 200ms ease-in-out;
  transition-property: color;

  &::placeholder {
    color: ${text[40]};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TextLength = styled.span`
  ${textStyles.caption.regular12};
  color: ${text[40]};
  margin-left: auto;
  margin-right: 8px;
`;
