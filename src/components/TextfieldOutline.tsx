import { useEffect, useState, useRef } from "react";
import { UseFormRegister, UseFormSetValue, FieldValues } from "react-hook-form";
import styled, { css } from "styled-components";
import { text, line, icon } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";
import Icons from "@/styles/iconography";

type TextfieldStatus = "normal" | "active" | "error";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  name: string;
  label: string;
  status?: TextfieldStatus;
  width?: string;
}

interface StyledProps {
  $status?: TextfieldStatus;
  $width?: string;
}

function TextfieldOutline({
  register,
  setValue,
  required,
  placeholder,
  name,
  label,
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

  const handleClearValue = () => {
    setValue(name, "");
  };
  return (
    <Container $status={textfieldStatus} $width={width}>
      <InputWrapper $status={textfieldStatus}>
        <Label $status={textfieldStatus}>{label}</Label>
        <input
          type="text"
          {...register(name, { required })}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </InputWrapper>
      <CancelButton onClick={handleClearValue} $status={textfieldStatus}>
        <Icons.close />
      </CancelButton>
    </Container>
  );
}

export default TextfieldOutline;

const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  width: ${({ $width }) => $width};
  border-bottom: 1px;
  border-style: solid;
  transition: border-color 200ms ease-in-out;

  ${({ $status }) => {
    switch ($status) {
      case "active":
        return css`
          border-color: ${line[20]};
        `;
      case "error":
        return css`
          border-color: ${line.accent};
        `;

      default:
        return css`
          border-color: ${line[30]};
        `;
    }
  }}
`;

const InputWrapper = styled.label<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 24px;

  & input[type="text"] {
    padding: initial;
    outline: initial;
    border: initial;
    background-color: transparent;
    width: 100%;
    height: 24px;
    margin-bottom: 8px;
    ${textStyles.body1.semiBold16};
    ${({ $status }) => {
      switch ($status) {
        case "active":
          return css`
            color: ${text[10]};
          `;
        case "error":
          return css`
            color: ${text[30]};
          `;

        default:
          return css`
            color: ${text[30]};
          `;
      }
    }}
    transition: color 200ms ease-in-out;

    &::placeholder {
      color: ${text.disabled};
    }
  }
`;

const Label = styled.span<StyledProps>`
  ${textStyles.caption.regular12};
  transition: color 200ms ease-in-out;

  ${({ $status }) =>
    $status === "normal"
      ? css`
          color: ${text.disabled};
        `
      : css`
          color: ${text[40]};
        `}
`;

const CancelButton = styled.div<StyledProps>`
  position: absolute;
  right: 0;
  bottom: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  user-select: none;

  & svg {
    width: 100%;
    height: 100%;

    path {
      transition: fill 200ms ease-in-out;
      ${({ $status }) =>
        $status === "active"
          ? css`
              fill: ${icon[10]};
            `
          : css`
              fill: ${icon[30]};
            `}
    }
  }
`;
