import styled, { FlattenSimpleInterpolation } from "styled-components";
import { text as textColors } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";

export type ButtonStatus = "enabled" | "disabled" | "pressed";
export type ButtonSize = "medium" | "small";

interface Props {
  status: ButtonStatus;
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
  $width: number;
  $height: number;
  $font: FlattenSimpleInterpolation;
  $labelColor: string;
  $surfaceColor: string;
}

function ButtonBase({
  status,
  size,
  label,
  action,
  labelEnabledColor,
  surfaceEnabledColor,
  labelDisabledColor,
  surfaceDisabledColor,
}: BaseProps) {
  const setColor = () => {
    let label = labelEnabledColor;
    let surface = surfaceEnabledColor;

    if (status === "enabled") {
      label = labelEnabledColor;
      surface = surfaceEnabledColor;
    }

    if (status === "disabled") {
      label = labelDisabledColor;
      surface = surfaceDisabledColor;
    }

    return { label, surface };
  };

  const setSize = () => {
    let width = 60;
    let height = 32;
    let font = textStyles.body1.semiBold16;

    if (size === "medium") {
      width = 60;
      height = 32;
      font = textStyles.body1.semiBold16;
    }

    if (size === "small") {
      width = 50;
      height = 32;
      font = textStyles.body2.semiBold14;
    }

    return { width, height, font };
  };

  return (
    <Container
      onClick={action}
      disabled={status === "disabled"}
      $labelColor={setColor().label}
      $surfaceColor={setColor().surface}
      $font={setSize().font}
      $width={setSize().width}
      $height={setSize().height}
    >
      {label}
    </Container>
  );
}

function Primary({ label, action, status, size }: Props) {
  return (
    <ButtonBase
      status={status}
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

function Neutral({ label, action, status, size }: Props) {
  return (
    <ButtonBase
      status={status}
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
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border: initial;
  padding: initial;
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
