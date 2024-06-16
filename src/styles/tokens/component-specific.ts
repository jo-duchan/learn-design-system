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
  primaryLowLabelEnabled: surface.primary10,
  primaryLowSurfacePressed: surface.primaryLow20,
  primaryLowLabelPressed: surface.primary10,
  neutralSurfaceEnabled: surface[20],
  neutralLabelEnabled: text[10],
  neutralSurfacePressed: surface[10],
  neutralLabelPressed: text[10],
  inverseSurfaceEnabled: "",
  inverseLabelEnabled: "",
  inverseSurfacePressed: "",
  inverseLabelPressed: "",
  surfaceDisabled: surface[30],
  labelDisabled: text[30],
  largeRound: round.xs,
  mediumRound: round.xs,
};

export const divider = {
  1: line[30],
  2: line[40],
};

export const infoText = text[40];
