import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { alertRound } from "@/styles/tokens/component-specific";
import { surface, text } from "@/styles/tokens/alias";
import textStyles from "@/styles/typography";

interface Props {
  isShow: boolean;
  width?: string;
  text: string;
  button?: React.ReactNode;
}

interface StyledProps {
  $width: string;
}

function SnackBar({ isShow = false, width = "100%", text, button }: Props) {
  return (
    <CSSTransition in={isShow} timeout={300} unmountOnExit>
      <Container $width={width}>
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
  transform: translate3d(-50%, 100%, 0);
  opacity: 0;

  &[class*="enter-"] {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }

  &[class*="exit-"] {
    transform: translate3d(-50%, 100%, 0);
    opacity: 0;
  }
`;

const Container = styled.div<StyledProps>`
  position: fixed;
  left: 50%;
  bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: ${({ $width }) => $width};
  height: fit-content;
  min-height: 48px;
  padding: 8px 16px;
  box-sizing: border-box;
  background-color: ${surface[20]};
  border-radius: ${alertRound};
  z-index: 900;

  ${Transition};
`;

const TextContent = styled.span`
  flex: 1;
  color: ${text[20]};
  ${textStyles.body2.regular14};
  white-space: pre-wrap;
`;
