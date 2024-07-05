import styled from "styled-components";
import { backgroundBlur } from "@/styles/effects";

interface Props {
  visible: boolean;
}

interface StyledProps {
  $opacity: boolean;
}

function Dim({ visible = true }: Props) {
  return <Container $opacity={visible} />;
}

export default Dim;

const Container = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${backgroundBlur};
  opacity: ${({ $opacity }) => ($opacity ? 1 : 0)};
  transition: opacity 200ms ease-in-out;
`;
