import styled from "styled-components";
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
  $color: string;
  $bgColor: string;
}

function Chip({ label, focused, action }: Props) {
  const setColor = () => {
    let label = textColor[20];
    let surface = surfaceColor[20];

    if (focused) {
      label = textColor[50];
      surface = surfaceColor[50];
    }

    if (!focused) {
      label = textColor[20];
      surface = surfaceColor[20];
    }

    return { label, surface };
  };
  return (
    <Container
      onClick={action}
      $color={setColor().label}
      $bgColor={setColor().surface}
    >
      {label}
    </Container>
  );
}

export default Chip;

const Container = styled.div<StyledProps>`
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: ${`${chip.largeRound}px`};
  ${textStyles.body2.semiBold14};
  color: ${({ $color }) => $color};
  background-color: ${({ $bgColor }) => $bgColor};
  cursor: pointer;
  user-select: none;

  transition: 200ms ease-in-out;
  transition-property: color, background-color;
`;
