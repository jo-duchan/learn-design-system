import { useEffect, useState, useRef } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styled, { css } from "styled-components";
import { text, line, round, surface } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";

type TextfieldStatus = "normal" | "active" | "error";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  name: string;
  status?: TextfieldStatus;
  width?: string;
}

interface StyledProps {
  $status?: TextfieldStatus;
  $width?: string;
}

function TextfieldFill({
  register,
  required,
  placeholder,
  name,
  status = "normal",
  width = "100%",
}: Props) {
  const [textfieldStatus, setTextfieldStatus] =
    useState<TextfieldStatus>("normal");
  const prevStatus = useRef<TextfieldStatus | null>(null);

  useEffect(() => {
    setTextfieldStatus(status);
  }, [status]);

  const handleFocus = () => {
    prevStatus.current = textfieldStatus;
    setTextfieldStatus("active");
  };

  const handleBlur = () => {
    if (prevStatus.current) {
      setTextfieldStatus(prevStatus.current);
    }
  };

  return (
    <Container $status={textfieldStatus} $width={width}>
      <input
        type="text"
        {...register(name, { required })}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
}

export default TextfieldFill;

const Container = styled.div<StyledProps>`
  width: ${({ $width }) => $width};
  height: 40px;

  & input[type="text"] {
    outline: initial;
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: ${surface[20]};
    border-width: 1px;
    border-style: solid;
    border-radius: ${round.s};
    ${textStyles.body1.semiBold16};
    ${({ $status }) => {
      switch ($status) {
        case "active":
          return css`
            color: ${text[10]};
            border-color: transparent;
          `;
        case "error":
          return css`
            color: ${text[30]};
            border-color: ${line.accent};
          `;

        default:
          return css`
            color: ${text[30]};
            border-color: transparent;
          `;
      }
    }}
    transition: color, border-color 200ms ease-in-out;

    &::placeholder {
      color: ${text.disabled};
    }
  }
`;
