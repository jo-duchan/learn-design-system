import { useState, useEffect } from "react";
import styled, { type FlattenSimpleInterpolation } from "styled-components";
import { button } from "@/styles/tokens/component-specific";
import textStyles from "@/styles/typography";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonStatus = "enabled" | "disabled" | "pressed";

interface Props {
  size: ButtonSize;
  status: ButtonStatus;
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
  $width: number;
  $height: number;
  $round: string;
  $font: FlattenSimpleInterpolation;
  $labelColor: string;
  $surfaceColor: string;
}

function ButtonBase({
  size,
  status,
  label,
  action,
  labelEnabledColor,
  surfaceEnabledColor,
  labelPressedColor,
  surfacePressedColor,
  labelDisabledColor,
  surfaceDisabledColor,
}: BaseProps) {
  const [btnStatus, setBtnStatus] = useState<ButtonStatus>(status);

  useEffect(() => {
    setBtnStatus(status);
  }, [status]);

  const handleSetStatusPressed = () => {
    setBtnStatus("pressed");
  };

  const handleSetStatusEnabled = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget.disabled) return;
    setBtnStatus("enabled");
  };

  const setColor = () => {
    let label = labelEnabledColor;
    let surface = surfaceEnabledColor;

    if (btnStatus === "enabled") {
      label = labelEnabledColor;
      surface = surfaceEnabledColor;
    }

    if (btnStatus === "pressed") {
      label = labelPressedColor;
      surface = surfacePressedColor;
    }

    if (btnStatus === "disabled") {
      label = labelDisabledColor;
      surface = surfaceDisabledColor;
    }

    return { label, surface };
  };

  const setSize = () => {
    let width = 100;
    let height = 40;
    let round = button.mediumRound;
    let font = textStyles.body1.semiBold16;

    if (size === "large") {
      width = 148;
      height = 54;
      round = button.largeRound;
      font = textStyles.title2.bold18;
    }

    if (size === "medium") {
      width = 100;
      height = 40;
      round = button.mediumRound;
      font = textStyles.body1.semiBold16;
    }

    if (size === "small") {
      width = 60;
      height = 32;
      round = button.mediumRound;
      font = textStyles.body2.semiBold14;
    }

    return { width, height, round, font };
  };

  return (
    <Container
      onClick={action}
      onMouseDown={handleSetStatusPressed}
      onMouseUp={handleSetStatusEnabled}
      onMouseLeave={handleSetStatusEnabled}
      $width={setSize().width}
      $height={setSize().height}
      $round={setSize().round}
      $font={setSize().font}
      $labelColor={setColor().label}
      $surfaceColor={setColor().surface}
      disabled={status === "disabled"}
    >
      {label}
    </Container>
  );
}

function Primary({ size, status, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      status={status}
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

function PrimaryLow({ size, status, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      status={status}
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

function Neutral({ size, status, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      status={status}
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

function Inverse({ size, status, label, action }: Props) {
  return (
    <ButtonBase
      size={size}
      status={status}
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
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border: initial;
  padding: initial;
  border-radius: ${({ $round }) => $round};
  color: ${({ $labelColor }) => $labelColor};
  background-color: ${({ $surfaceColor }) => $surfaceColor};
  ${({ $font }) => $font};

  transition: 200ms ease-in-out;
  transition-property: color, background-color;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }
`;
