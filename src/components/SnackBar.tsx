import styled, { type FlattenSimpleInterpolation } from "styled-components";
import { button } from "@/styles/tokens/component-specific";
import textStyles from "@/styles/typography";

function SnackBarBase() {
  return <Container></Container>;
}

function WithIconButton() {
  return <SnackBarBase />;
}

function WithGhostButton() {
  return <SnackBarBase />;
}

const SnackBar = {
  WithIconButton,
  WithGhostButton,
};

export default SnackBar;

const Container = styled.div``;
