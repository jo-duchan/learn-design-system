import styled, { css } from "styled-components";
import { divider } from "@/styles/tokens/component-specific";

export type DividerStyle = "default" | "strong" | "navigation";

interface Props {
  style: DividerStyle;
}

interface StyledProps {
  $style: DividerStyle;
}

function Divider({ style = "default" }: Props) {
  return <Container $style={style} />;
}

export default Divider;

const Container = styled.div<StyledProps>`
  width: 100%;

  ${({ $style }) => {
    switch ($style) {
      case "default":
        return css`
          height: 1px;
          background-color: ${divider[2]};
        `;
      case "strong":
        return css`
          height: 12px;
          background-color: ${divider[2]};
        `;
      case "navigation":
        return css`
          height: 1px;
          background-color: ${divider[1]};
        `;
    }
  }}
`;
