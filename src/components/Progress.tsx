import styled from "styled-components";
import { surface } from "@/styles/tokens/alias";

interface Props {
  present: number;
  top?: number;
}

interface StyledProps {
  $top: number;
  $present: number;
}

function Progress({ present, top = 0 }: Props) {
  return <Container $top={top} $present={present} />;
}

export default Progress;

const Container = styled.div<StyledProps>`
  position: fixed;
  top: ${({ $top }) => `${$top}px`};
  left: 0;
  width: 100%;
  height: 4px;
  background-color: ${surface[25]};
  overflow: hidden;
  z-index: 900;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: ${surface[50]};
    transform: ${({ $present }) => `translate3d(${$present}%, 0, 0)`};
  }
`;
