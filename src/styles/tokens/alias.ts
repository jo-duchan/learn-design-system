import { colors, multiple } from "@/styles/tokens/primitive";

/**
 * Alias Text Color Tokens
 */
const text = {
  10: colors.neutralCool[99],
  20: colors.neutralCool[95],
  30: colors.neutralCool[80],
  40: colors.neutralCool[70],
  50: colors.neutralCool[1],
  primary: colors.orange[50],
  error: colors.red[50],
};

/**
 * Alias Icon Color Tokens
 */
const icon = {
  10: colors.neutralCool[99],
  20: colors.neutralCool[90],
  30: colors.neutralCool[60],
  accect: colors.orange[50],
  userLevel1: colors.orange[50],
  userLevel2: colors.blue[50],
  userLevelAdmin: colors.orange[50],
};

/**
 * Alias Line Color Tokens
 */
const line = {
  10: colors.neutralCool[99],
  20: colors.neutralCool[90],
  30: colors.neutralCool[60],
  40: colors.neutralCool[40],
  accect: colors.orange[50],
  userLevel1: colors.orange[50],
  userLevel2: colors.blue[50],
  userLevelAdmin: colors.orange[50],
};

/**
 * Alias Surface Color Tokens
 */
const surface = {
  10: colors.neutralCool[20],
  20: colors.neutralCool[40],
  30: colors.neutralCool[60],
  40: colors.neutralCool[80],
  50: colors.neutralWarm[95],
  dim: colors.neutralCoolAlpha[40],
  primary10: colors.orange[50],
  primary20: colors.orange[40],
  primaryLow10: colors.orangeAlpha[70],
  primaryLow20: colors.orangeAlpha[50],
};

/**
 * Alias Spacing Tokens
 */
const spacing = {
  4: multiple[4],
  8: multiple[8],
  16: multiple[16],
  24: multiple[24],
  32: multiple[32],
  40: multiple[40],
};

/**
 * Alias Round Tokens
 */
const round = {
  xs: multiple[4],
  s: multiple[8],
  m: multiple[16],
  l: multiple[24],
  full: multiple[999],
};

export { text, icon, line, surface, spacing, round };
