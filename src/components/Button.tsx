import { useState } from "react";
import styled, { type FlattenSimpleInterpolation } from "styled-components";
import { button } from "@/styles/tokens/component-specific";
import textStyles from "@/styles/typography";

export type ButtonStyle = "primary" | "primary-low" | "neutral" | "inverse";
export type ButtonSize = "large" | "medium";
export type ButtonStatus = "enabled" | "disabled" | "pressed";

interface Props {
  style: ButtonStyle;
  size: ButtonSize;
  status: ButtonStatus;
  label: string;
  action: () => void;
}

interface StyledProps {
  $width: number;
  $height: number;
  $round: number;
  $font: FlattenSimpleInterpolation;
  $labelColor: string;
  $surfaceColor: string;
}

function Button({ style, size, status = "enabled", label, action }: Props) {
  const [btnStatus, SetBtnStatus] = useState<ButtonStatus>(status);

  const handleClick = () => {
    action();
  };

  const handleSetStatusPressed = () => {
    SetBtnStatus("pressed");
  };

  const handleSetStatusEnabled = () => {
    SetBtnStatus("enabled");
  };

  const setColor = () => {
    let label = "";
    let surface = "";

    if (style === "primary" && btnStatus === "enabled") {
      label = button.primaryLabelEnabled;
      surface = button.primarySurfaceEnabled;
    }

    if (style === "primary-low" && btnStatus === "enabled") {
      label = button.primaryLowLabelEnabled;
      surface = button.primaryLowSurfaceEnabled;
    }

    if (style === "neutral" && btnStatus === "enabled") {
      label = button.neutralLabelEnabled;
      surface = button.neutralSurfaceEnabled;
    }

    if (style === "inverse" && btnStatus === "enabled") {
      label = button.inverseLabelEnabled;
      surface = button.inverseSurfaceEnabled;
    }

    if (style === "primary" && btnStatus === "pressed") {
      label = button.primaryLabelPressed;
      surface = button.primarySurfacePressed;
    }

    if (style === "primary-low" && btnStatus === "pressed") {
      label = button.primaryLowLabelPressed;
      surface = button.primaryLowSurfacePressed;
    }

    if (style === "neutral" && btnStatus === "pressed") {
      label = button.neutralLabelPressed;
      surface = button.neutralSurfacePressed;
    }

    if (style === "inverse" && btnStatus === "pressed") {
      label = button.inverseLabelPressed;
      surface = button.inverseSurfacePressed;
    }

    if (btnStatus === "disabled") {
      label = button.labelDisabled;
      surface = button.surfaceDisabled;
    }

    return { label, surface };
  };

  const setSize = () => {
    let width = 0;
    let height = 0;
    let round = 0;
    let font = [] as FlattenSimpleInterpolation;

    if (size === "large") {
      width = 148;
      height = 54;
      round = button.largeRound;
      font = textStyles.title2.bold;
    }

    if (size === "medium") {
      width = 100;
      height = 40;
      round = button.mediumRound;
      font = textStyles.body1.semiBold;
    }

    return { width, height, round, font };
  };

  return (
    <Container
      onClick={handleClick}
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

export default Button;

const Container = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border: initial;
  padding: initial;
  border-radius: ${({ $round }) => `${$round}px`};
  color: ${({ $labelColor }) => $labelColor};
  background-color: ${({ $surfaceColor }) => $surfaceColor};
  ${({ $font }) => $font};

  transition: 200ms ease-in-out;
  transition-property: color, background-color;
  cursor: pointer;
  user-select: none;
`;
