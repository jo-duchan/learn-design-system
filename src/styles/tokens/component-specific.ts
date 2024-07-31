import { surface, text, line, round, icon } from "@/styles/tokens/alias";

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
  iconPrimarySurfaceEnabled: surface.primaryLow10,
  iconPrimaryIconEnabled: icon.accent,
  iconPrimarySurfacePressed: surface.primaryLow20,
  iconPrimaryIconPressed: icon.accent,
  iconPrimarySurfaceDisabled: surface.disabled10,
  iconPrimaryIconDisabled: icon[30],
  iconGhostIconEnabled: icon[10],
  iconGhostSurfacePressed: surface.neutralLow20,
  iconGhostIconPressed: icon[10],
  iconGhostSurfaceDisabled: surface.disabled10,
  iconGhostIconDisabled: icon[30],

  largeRound: round.xs,
  mediumRound: round.xs,
  iconRound: round.full,
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

export const alertRound = round.xs;
