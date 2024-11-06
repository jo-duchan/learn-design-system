import styled, { css } from "styled-components";
import { text as textColors } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";

export type ButtonSize = "medium" | "small";

interface Props {
  disabled?: boolean;
  size: ButtonSize;
  label: string;
  action: () => void;
}

interface BaseProps extends Props {
  labelEnabledColor: string;
  surfaceEnabledColor: string;
  labelDisabledColor: string;
  surfaceDisabledColor: string;
}

interface StyledProps {
  $size: ButtonSize;
  $labelEnabledColor: string;
  $surfaceEnabledColor: string;
  $labelDisabledColor: string;
  $surfaceDisabledColor: string;
}

function ButtonBase({
  disabled = false,
  size,
  label,
  action,
  labelEnabledColor,
  surfaceEnabledColor,
  labelDisabledColor,
  surfaceDisabledColor,
}: BaseProps) {
  return (
    <Container
      onClick={action}
      disabled={disabled}
      $labelEnabledColor={labelEnabledColor}
      $surfaceEnabledColor={surfaceEnabledColor}
      $labelDisabledColor={labelDisabledColor}
      $surfaceDisabledColor={surfaceDisabledColor}
      $size={size}
    >
      {label}
    </Container>
  );
}

function Primary({ label, action, disabled, size }: Props) {
  return (
    <ButtonBase
      disabled={disabled}
      size={size}
      label={label}
      action={action}
      labelEnabledColor={textColors.primary}
      surfaceEnabledColor="transparent"
      labelDisabledColor={textColors.disabled}
      surfaceDisabledColor="transparent"
    ></ButtonBase>
  );
}

function Neutral({ label, action, disabled, size }: Props) {
  return (
    <ButtonBase
      disabled={disabled}
      size={size}
      label={label}
      action={action}
      labelEnabledColor={textColors[20]}
      surfaceEnabledColor="transparent"
      labelDisabledColor={textColors.disabled}
      surfaceDisabledColor="transparent"
    ></ButtonBase>
  );
}

const GhostButton = {
  Primary,
  Neutral,
};

export default GhostButton;

const Container = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: initial;
  padding: initial;

  &:enabled {
    color: ${({ $labelEnabledColor }) => $labelEnabledColor};
    background-color: ${({ $surfaceEnabledColor }) => $surfaceEnabledColor};
  }

  &:disabled {
    color: ${({ $labelDisabledColor }) => $labelDisabledColor};
    background-color: ${({ $surfaceDisabledColor }) => $surfaceDisabledColor};
    cursor: not-allowed;
  }

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return css`
          width: 50px;
          height: 32px;
          ${textStyles.body2.semiBold14};
        `;
      case "medium":
        return css`
          width: 60px;
          height: 32px;
          ${textStyles.body1.semiBold16};
        `;
    }
  }}

  transition: 200ms ease-in-out;
  transition-property: color, background-color;
  cursor: pointer;
  user-select: none;
`;
