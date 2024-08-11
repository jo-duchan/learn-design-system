import styled from "styled-components";
import { surface } from "@/styles/tokens/alias";

interface Props {
  present: number;
  width?: number;
  top?: number;
  left?: number;
}

interface StyledProps {
  $width: string;
  $top: number;
  $left: number;
  $present: number;
}

function Progress({ present, width, top = 0, left = 0 }: Props) {
  const setSize = () => {
    if (width) {
      return `${width}px`;
    }
    return "100%";
  };

  return (
    <Container $width={setSize()} $top={top} $left={left} $present={present} />
  );
}

export default Progress;

const Container = styled.div<StyledProps>`
  position: fixed;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
  width: ${({ $width }) => $width};
  height: 4px;
  background-color: ${surface[25]};
  overflow: hidden;

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
