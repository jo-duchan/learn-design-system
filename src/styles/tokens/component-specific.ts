import { surface, text, line, round } from "@/styles/tokens/alias";

/**
 * Component Specific Button Tokens
 */
export const button = {
  primarySurfaceEnabled: surface.primary10,
  primaryLabelEnabled: text[10],
  primarySurfacePressed: surface.primary20,
  primaryLabelPressed: text[10],
  primaryLowSurfaceEnabled: surface.primaryLow10,
  primaryLowLabelEnabled: text.primary,
  primaryLowSurfacePressed: surface.primaryLow20,
  primaryLowLabelPressed: text.primary,
  neutralSurfaceEnabled: surface.neutral10,
  neutralLabelEnabled: text[10],
  neutralSurfacePressed: surface.neutral20,
  neutralLabelPressed: text[10],
  inverseSurfaceEnabled: surface.inverse10,
  inverseLabelEnabled: text[50],
  inverseSurfacePressed: surface.inverse20,
  inverseLabelPressed: text[50],
  neutralLowSurfaceEnabled: surface.neutralLow10,
  neutralLowSurfacePressed: surface.neutralLow20,
  surfaceDisabled: surface.disabled10,
  labelDisabled: text.disabled,
  largeRound: round.xs,
  mediumRound: round.xs,
};

export const divider = {
  1: line[30],
  2: line[40],
};

export const infoText = text[40];

export const chip = {
  largeRound: round.s,
  smallRound: round.full,
};
