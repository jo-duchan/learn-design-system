import styled, { css } from "styled-components";
import {
  text as textColor,
  surface as surfaceColor,
} from "@/styles/tokens/alias";
import { chip } from "@/styles/tokens/component-specific";
import textStyles from "@/styles/typography";

interface Props {
  label: string;
  focused: boolean;
  action: () => void;
}

interface StyledProps {
  $focused: boolean;
}

function Chip({ label, focused, action }: Props) {
  return (
    <Container onClick={action} $focused={focused}>
      {label}
    </Container>
  );
}

export default Chip;

const Container = styled.div<StyledProps>`
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: ${chip.largeRound};
  ${textStyles.body2.semiBold14};
  cursor: pointer;
  user-select: none;

  ${({ $focused }) =>
    $focused
      ? css`
          color: ${textColor[50]};
          background-color: ${surfaceColor[50]};
        `
      : css`
          color: ${textColor[20]};
          background-color: ${surfaceColor[20]};
        `}

  transition: 200ms ease-in-out;
  transition-property: color, background-color;
`;
