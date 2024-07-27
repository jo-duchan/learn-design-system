import { useState, useEffect } from "react";
import styled from "styled-components";
import { button } from "@/styles/tokens/component-specific";

export type ButtonStatus = "enabled" | "disabled" | "pressed";
export type ButtonSize = "small" | "xSmall";

interface Props {
  size: ButtonSize;
  status: ButtonStatus;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  action: () => void;
}

interface BaseProps extends Props {
  iconEnabledColor: string;
  surfaceEnabledColor: string;
  iconPressedColor: string;
  surfacePressedColor: string;
  iconDisabledColor: string;
  surfaceDisabledColor: string;
}

interface StyledProps {
  $width: number;
  $height: number;
  $iconColor: string;
  $surfaceColor: string;
}

function ButtonBase({
  size,
  status,
  icon: Icon,
  action,
  iconEnabledColor,
  surfaceEnabledColor,
  iconPressedColor,
  surfacePressedColor,
  iconDisabledColor,
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
    let icon = iconEnabledColor;
    let surface = surfaceEnabledColor;

    if (btnStatus === "enabled") {
      icon = iconEnabledColor;
      surface = surfaceEnabledColor;
    }

    if (btnStatus === "pressed") {
      icon = iconPressedColor;
      surface = surfacePressedColor;
    }

    if (btnStatus === "disabled") {
      icon = iconDisabledColor;
      surface = surfaceDisabledColor;
    }

    return { icon, surface };
  };

  const setSize = () => {
    let width = 32;
    let height = 32;

    if (size === "small") {
      width = 32;
      height = 32;
    }

    if (size === "xSmall") {
      width = 24;
      height = 24;
    }

    return { width, height };
  };

  return (
    <Container
      onClick={action}
      onMouseDown={handleSetStatusPressed}
      onMouseUp={handleSetStatusEnabled}
      onMouseLeave={handleSetStatusEnabled}
      $width={setSize().width}
      $height={setSize().height}
      $iconColor={setColor().icon}
      $surfaceColor={setColor().surface}
      disabled={status === "disabled"}
    >
      <Icon />
    </Container>
  );
}

function Primary({ size, status, icon, action }: Props) {
  return (
    <ButtonBase
      size={size}
      status={status}
      icon={icon}
      action={action}
      iconEnabledColor={button.iconPrimaryIconEnabled}
      surfaceEnabledColor={button.iconPrimarySurfaceEnabled}
      iconPressedColor={button.iconPrimaryIconPressed}
      surfacePressedColor={button.iconPrimarySurfacePressed}
      iconDisabledColor={button.iconPrimaryIconDisabled}
      surfaceDisabledColor={button.iconPrimarySurfaceDisabled}
    />
  );
}

function Ghost({ size, status, icon, action }: Props) {
  return (
    <ButtonBase
      size={size}
      status={status}
      icon={icon}
      action={action}
      iconEnabledColor={button.iconGhostIconEnabled}
      surfaceEnabledColor={"transparent"}
      iconPressedColor={button.iconGhostIconPressed}
      surfacePressedColor={button.iconGhostSurfacePressed}
      iconDisabledColor={button.iconGhostIconDisabled}
      surfaceDisabledColor={button.iconGhostSurfaceDisabled}
    />
  );
}

const IconButton = {
  Primary,
  Ghost,
};

export default IconButton;

const Container = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border: initial;
  padding: initial;
  border-radius: ${`${button.iconRound}px`};
  background-color: ${({ $surfaceColor }) => $surfaceColor};
  transition: 200ms ease-in-out;
  transition-property: background-color;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }

  & svg path {
    fill: ${({ $iconColor }) => $iconColor};
    transition: 200ms ease-in-out;
    transition-property: fill;
  }
`;
