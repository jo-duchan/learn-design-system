import styled, { css } from "styled-components";
import { button } from "@/styles/tokens/component-specific";
import textStyles from "@/styles/typography";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonStatus = "enabled" | "disabled" | "pressed";

interface Props {
  size: ButtonSize;
  disabled?: boolean;
  label: string;
  action: () => void;
}

interface BaseProps extends Props {
  labelEnabledColor: string;
  surfaceEnabledColor: string;
  labelPressedColor: string;
  surfacePressedColor: string;
  labelDisabledColor: string;
  surfaceDisabledColor: string;
}

interface StyledProps {
  $size: ButtonSize;
  $labelEnabledColor: string;
  $surfaceEnabledColor: string;
  $labelPressedColor: string;
  $surfacePressedColor: string;
  $labelDisabledColor: string;
  $surfaceDisabledColor: string;
}

function ButtonBase({
  size,
  disabled = false,
  label,
  action,
  labelEnabledColor,
  surfaceEnabledColor,
  labelPressedColor,
  surfacePressedColor,
  labelDisabledColor,
  surfaceDisabledColor,
}: BaseProps) {
  return (
    <Container
      onClick={action}
      $labelEnabledColor={labelEnabledColor}
      $surfaceEnabledColor={surfaceEnabledColor}
      $labelPressedColor={labelPressedColor}
      $surfacePressedColor={surfacePressedColor}
      $labelDisabledColor={labelDisabledColor}
      $surfaceDisabledColor={surfaceDisabledColor}
      $size={size}
      disabled={disabled}
    >
      {label}
    </Container>
  );
}

function Primary({ size, disabled, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      disabled={disabled}
      label={label}
      action={action}
      labelEnabledColor={button.primaryLabelEnabled}
      surfaceEnabledColor={button.primarySurfaceEnabled}
      labelPressedColor={button.primaryLabelPressed}
      surfacePressedColor={button.primarySurfacePressed}
      labelDisabledColor={button.labelDisabled}
      surfaceDisabledColor={button.surfaceDisabled}
    />
  );
}

function PrimaryLow({ size, disabled, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      disabled={disabled}
      label={label}
      action={action}
      labelEnabledColor={button.primaryLowLabelEnabled}
      surfaceEnabledColor={button.primaryLowSurfaceEnabled}
      labelPressedColor={button.primaryLowLabelPressed}
      surfacePressedColor={button.primaryLowSurfacePressed}
      labelDisabledColor={button.labelDisabled}
      surfaceDisabledColor={button.surfaceDisabled}
    />
  );
}

function Neutral({ size, disabled, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      disabled={disabled}
      label={label}
      action={action}
      labelEnabledColor={button.neutralLabelEnabled}
      surfaceEnabledColor={button.neutralSurfaceEnabled}
      labelPressedColor={button.neutralLabelPressed}
      surfacePressedColor={button.neutralSurfacePressed}
      labelDisabledColor={button.labelDisabled}
      surfaceDisabledColor={button.surfaceDisabled}
    />
  );
}

function Inverse({ size, disabled, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      disabled={disabled}
      label={label}
      action={action}
      labelEnabledColor={button.inverseLabelEnabled}
      surfaceEnabledColor={button.inverseSurfaceEnabled}
      labelPressedColor={button.inverseLabelPressed}
      surfacePressedColor={button.inverseSurfacePressed}
      labelDisabledColor={button.labelDisabled}
      surfaceDisabledColor={button.surfaceDisabled}
    />
  );
}

const Button = {
  Primary,
  PrimaryLow,
  Neutral,
  Inverse,
};

export default Button;

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

  &:active {
    color: ${({ $labelPressedColor }) => $labelPressedColor};
    background-color: ${({ $surfacePressedColor }) => $surfacePressedColor};
  }

  &:disabled {
    color: ${({ $labelDisabledColor }) => $labelDisabledColor};
    background-color: ${({ $surfaceDisabledColor }) => $surfaceDisabledColor};
  }

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return css`
          width: 60px;
          height: 32px;
          border-radius: ${button.mediumRound};
          ${textStyles.body2.semiBold14}
        `;
      case "medium":
        return css`
          width: 100px;
          height: 40px;
          border-radius: ${button.mediumRound};
          ${textStyles.body1.semiBold16}
        `;
      case "large":
        return css`
          width: 148px;
          height: 54px;
          border-radius: ${button.largeRound};
          ${textStyles.title2.bold18};
        `;
    }
  }}

  transition: 200ms ease-in-out;
  transition-property: color, background-color;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }
`;
