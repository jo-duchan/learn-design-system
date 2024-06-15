import { surface, text, line } from "@/styles/tokens/alias";

// const primary = {};
// const primaryLow = {};
// const neutral = {};
// const inverse = {};

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
};

export const divider = line[40];

export const infoText = text[40];
