import styled from "styled-components";
import { divider } from "@/styles/tokens/component-specific";

export type DividerStyle = "default" | "strong" | "navigation";

interface Props {
  fullWidth: boolean;
  width?: number;
  style: DividerStyle;
}

interface StyledProps {
  $width: string;
  $height: string;
  $surfaceColor: string;
}

function Divider({ fullWidth = false, width = 328, style = "default" }: Props) {
  const setStyle = () => {
    let dividerWidth = `${width}px`;
    let height: string = "1px";
    let surfaceColor: string = divider[2];

    if (fullWidth) {
      dividerWidth = "100%";
    }

    if (style === "strong") {
      height = "12px";
      surfaceColor = divider[2];
    }

    if (style === "navigation") {
      height = "1px";
      surfaceColor = divider[1];
    }

    return { dividerWidth, height, surfaceColor };
  };

  return (
    <Container
      $width={setStyle().dividerWidth}
      $height={setStyle().height}
      $surfaceColor={setStyle().surfaceColor}
    />
  );
}

export default Divider;

const Container = styled.div<StyledProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $surfaceColor }) => $surfaceColor};
`;
