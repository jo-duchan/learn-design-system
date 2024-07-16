import styled from "styled-components";
import {
  text as textColor,
  surface as surfaceColor,
} from "@/styles/tokens/alias";
import { chip } from "@/styles/tokens/component-specific";
import textStyles from "@/styles/typography";

interface Props {
  label: string;
}

function ChipContext({ label }: Props) {
  return <Container>{label}</Container>;
}

export default ChipContext;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 4px 12px;
  border-radius: ${`${chip.smallRound}px`};
  ${textStyles.caption.regular12};
  color: ${textColor[20]};
  background-color: ${surfaceColor[20]};
`;
