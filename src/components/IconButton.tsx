import styled, { css } from "styled-components";
import { button } from "@/styles/tokens/component-specific";

export type ButtonSize = "small" | "xSmall";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  disabled?: boolean;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  action?: () => void;
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
  $size: ButtonSize;
  $iconEnabledColor: string;
  $surfaceEnabledColor: string;
  $iconPressedColor: string;
  $surfacePressedColor: string;
  $iconDisabledColor: string;
  $surfaceDisabledColor: string;
}

function ButtonBase({
  size,
  disabled = false,
  icon: Icon,
  action,
  iconEnabledColor,
  surfaceEnabledColor,
  iconPressedColor,
  surfacePressedColor,
  iconDisabledColor,
  surfaceDisabledColor,
  ...props
}: BaseProps) {
  return (
    <Container
      onClick={action}
      $size={size}
      $iconEnabledColor={iconEnabledColor}
      $surfaceEnabledColor={surfaceEnabledColor}
      $iconPressedColor={iconPressedColor}
      $surfacePressedColor={surfacePressedColor}
      $iconDisabledColor={iconDisabledColor}
      $surfaceDisabledColor={surfaceDisabledColor}
      disabled={disabled}
      {...props}
    >
      <Icon />
    </Container>
  );
}

function Primary({ size, disabled, icon, action, ...props }: Props) {
  return (
    <ButtonBase
      size={size}
      disabled={disabled}
      icon={icon}
      action={action}
      iconEnabledColor={button.iconPrimaryIconEnabled}
      surfaceEnabledColor={button.iconPrimarySurfaceEnabled}
      iconPressedColor={button.iconPrimaryIconPressed}
      surfacePressedColor={button.iconPrimarySurfacePressed}
      iconDisabledColor={button.iconPrimaryIconDisabled}
      surfaceDisabledColor={button.iconPrimarySurfaceDisabled}
      {...props}
    />
  );
}

function Ghost({ size, disabled, icon, action, ...props }: Props) {
  return (
    <ButtonBase
      size={size}
      disabled={disabled}
      icon={icon}
      action={action}
      iconEnabledColor={button.iconGhostIconEnabled}
      surfaceEnabledColor={"transparent"}
      iconPressedColor={button.iconGhostIconPressed}
      surfacePressedColor={button.iconGhostSurfacePressed}
      iconDisabledColor={button.iconGhostIconDisabled}
      surfaceDisabledColor={button.iconGhostSurfaceDisabled}
      {...props}
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
  border: initial;
  padding: initial;
  border-radius: ${`${button.iconRound}`};

  transition: 200ms ease-in-out;
  transition-property: background-color;
  cursor: pointer;
  user-select: none;

  & svg path {
    transition: 200ms ease-in-out;
    transition-property: fill;
  }

  ${({ $size }) => {
    switch ($size) {
      case "xSmall":
        return css`
          width: 24px;
          height: 24px;
        `;
      case "small":
        return css`
          width: 32px;
          height: 32px;
        `;
    }
  }}

  &:enabled {
    svg path {
      fill: ${({ $iconEnabledColor }) => $iconEnabledColor};
    }
    background-color: ${({ $surfaceEnabledColor }) => $surfaceEnabledColor};
  }

  &:active {
    svg path {
      fill: ${({ $iconPressedColor }) => $iconPressedColor};
    }
    background-color: ${({ $surfacePressedColor }) => $surfacePressedColor};
  }

  &:disabled {
    svg path {
      fill: ${({ $iconDisabledColor }) => $iconDisabledColor};
    }
    background-color: ${({ $surfaceDisabledColor }) => $surfaceDisabledColor};
    cursor: not-allowed;
  }
`;
