import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { alertRound } from "@/styles/tokens/component-specific";
import { surface, text } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";

interface Props {
  isShow: boolean;
  fixedPosition: boolean;
  fullWidth: boolean;
  width?: number;
  text: string;
  button?: React.ReactNode;
}

interface StyledProps {
  $position: string;
  $bottom: string;
  $left: string;
  $width: string;
}

function SnackBar({
  isShow,
  fixedPosition,
  fullWidth,
  width = 328,
  text,
  button,
}: Props) {
  const setWidth = () => {
    if (fullWidth) {
      return "100%";
    }
    return `${width}px`;
  };

  const setPosition = () => {
    let position = "static";
    let bottom = "0";
    let left = "0";

    if (fixedPosition) {
      position = "fixed";
      bottom = "32px";
      left = `calc((${window.innerWidth}px - ${setWidth()}) / 2)`;
    }
    return { position, bottom, left };
  };

  return (
    <CSSTransition in={isShow} timeout={300} unmountOnExit>
      <Container
        $width={setWidth()}
        $position={setPosition().position}
        $bottom={setPosition().bottom}
        $left={setPosition().left}
      >
        <TextContent>{text}</TextContent>
        {button}
      </Container>
    </CSSTransition>
  );
}

export default SnackBar;

const Transition = () => css`
  transition: 300ms ease-in-out;
  transition-property: transform, opacity;
  transform: translate3d(0, 100%, 0);
  opacity: 0;

  &[class*="enter-"] {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  &[class*="exit-"] {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
`;

const Container = styled.div<StyledProps>`
  position: ${({ $position }) => $position};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  display: flex;
  align-items: center;
  gap: 16px;
  width: ${({ $width }) => $width};
  height: fit-content;
  min-height: 48px;
  padding: 8px 16px;
  box-sizing: border-box;
  background-color: ${surface[20]};
  border-radius: ${`${alertRound}px`};

  ${Transition};
`;

const TextContent = styled.span`
  flex: 1;
  color: ${text[20]};
  ${textStyles.body2.regular14};
  white-space: pre-wrap;
`;
