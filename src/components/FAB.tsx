import { useState } from "react";
import styled, { css } from "styled-components";
import { surface, text, line, round } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";

type FabType = "button" | "group";

interface BaseProps {
  fixedPosition?: boolean;
}

interface FabBaseInjectedProps {
  type: FabType;
}

interface FabBaseStyledProps {
  $type: FabType;
  $position: string;
  $bottom: string;
  $left: string;
  $transform: string;
}

function FabBase<P extends FabBaseInjectedProps>(
  Component: React.ComponentType<P>,
  type: FabType
): React.FC<Omit<P, keyof FabBaseInjectedProps> & BaseProps> {
  return ({ fixedPosition = true, ...props }) => {
    const setPosition = () => {
      let position = "static";
      let bottom = "0";
      let left = "0";
      let transform = "initial";

      if (fixedPosition) {
        position = "fixed";
        bottom = "32px";
        left = "50%";
        transform = "translate3d(-50%, 0, 0)";
      }
      return { position, bottom, left, transform };
    };

    return (
      <FabContainer
        $type={type}
        $position={setPosition().position}
        $bottom={setPosition().bottom}
        $left={setPosition().left}
        $transform={setPosition().transform}
      >
        <Component {...(props as unknown as P)} type={type} />
      </FabContainer>
    );
  };
}

const FabContainer = styled.div<FabBaseStyledProps>`
  position: ${({ $position }) => $position};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  transform: ${({ $transform }) => $transform};
  display: flex;
  align-items: center;
  width: fit-content;
  height: 48px;
  ${({ $type }) =>
    $type === "button"
      ? css`
          padding: 12px 14px;
        `
      : css`
          padding: 8px 16px;
        `}
  background-color: ${surface[20]};
  border: 1px solid ${line[30]};
  border-radius: ${round.full};
`;

interface FabItemContainerProps extends FabBaseInjectedProps {
  icon: React.ReactNode;
  label: string;
  action: (bool?: boolean) => void;
  feedbackIcon?: React.ReactNode;
}

function FabItemContainer(props: FabItemContainerProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <ItemContainer
      onClick={() => {
        props.feedbackIcon && setIsActive((prev) => !prev);
        props.action(isActive);
      }}
      $type={props.type}
    >
      <ItemIconWrapper
        $type={props.type}
        $active={props.feedbackIcon !== undefined && isActive}
      >
        <div className="default">{props.icon}</div>
        <div className="active">{props.feedbackIcon}</div>
      </ItemIconWrapper>

      <ItemLabel $active={isActive} $type={props.type}>
        {props.label}
      </ItemLabel>
    </ItemContainer>
  );
}

const ItemContainer = styled.div<{ $type: FabType }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  ${({ $type }) =>
    $type === "group"
      ? css`
          justify-content: space-between;
          width: 70px;
          height: 32px;
          padding: 5.5px 10px;
        `
      : css`
          gap: 8px;
        `}
`;

const ItemLabel = styled.span<{ $active: boolean; $type: FabType }>`
  ${({ $type }) =>
    $type === "button"
      ? textStyles.body2.semiBold14
      : textStyles.body2.regular14};

  color: ${({ $active }) => ($active ? text.primary : text[10])};
  transition: color 200ms ease-in-out;
`;

const ItemIconWrapper = styled.div<{ $active: boolean; $type: FabType }>`
  position: relative;
  ${({ $type }) =>
    $type === "button"
      ? css`
          width: 24px;
          height: 24px;
        `
      : css`
          width: 16px;
          height: 16px;
        `}
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 100%;
    height: 100%;
  }

  & :is(.default, .active) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 200ms ease-in-out;
  }

  ${({ $active }) =>
    $active
      ? css`
          & .default {
            opacity: 0;
          }

          & .active {
            opacity: 1;
          }
        `
      : css`
          & .default {
            opacity: 1;
          }

          & .active {
            opacity: 0;
          }
        `}
`;

function Button(props: FabItemContainerProps) {
  return <FabItemContainer {...props} />;
}

interface FabGroupProps extends FabBaseInjectedProps {
  children: React.ReactNode;
}

function Group(props: FabGroupProps) {
  return <GroupContainer>{props.children}</GroupContainer>;
}

const GroupContainer = styled.div`
  display: flex;
`;

function GroupItem(props: Omit<FabItemContainerProps, "type">) {
  return <FabItemContainer {...props} type="group" />;
}

const FAB = {
  Button: FabBase(Button, "button"),
  Group: FabBase(Group, "group"),
  GroupItem: GroupItem,
};

export default FAB;
