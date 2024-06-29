import { withAlpha } from "@/utile/color-utile";

/**
 * Primitive Tokens: Success Colors
 */
const green = {
  95: "#E6FFE2",
  90: "#D5F7D0",
  80: "#AFEDA7",
  70: "#8BE07F",
  60: "#69D15B",
  50: "#49BF39",
  40: "#379F28",
  30: "#267C1A",
  20: "#17560F",
  10: "#0B2D06",
};

/**
 * Primitive Tokens: Secondary Colors
 */
const blue = {
  95: "#DEF1FF",
  90: "#CAE3FF",
  80: "#98C8FB",
  70: "#65ADF3",
  60: "#3392E6",
  50: "#0A76D6",
  40: "#005FB4",
  30: "#00488E",
  20: "#003163",
  10: "#001935",
};

/**
 * Primitive Tokens: Error Colors
 */
const pink = {
  95: "#FFE3E4",
  90: "#FFD3D4",
  80: "#FFAEAE",
  70: "#FF8B8C",
  60: "#FF6C6D",
  50: "#FC5051",
  40: "#CD393A",
  30: "#9A2627",
  20: "#681617",
  10: "#350A0A",
};

/**
 * Primitive Tokens: Error Colors
 */
const red = {
  95: "#FFE5E1",
  90: "#FFD0CA",
  80: "#FFA798",
  70: "#FF8068",
  60: "#F95C3F",
  50: "#ED3B1A",
  40: "#C72A0C",
  30: "#9A1B03",
  20: "#680F00",
  10: "#350600",
};

/**
 * Primitive Tokens: Neutral Warm Colors
 */
const neutralWarm = {
  95: "#F3F1E8",
  90: "#DBD9D1",
  80: "#C3C2BA",
  70: "#93928C",
  60: "#7B7A75",
  50: "#63625E",
};

/**
 * Primitive Tokens: Neutral Cool Colors
 */
const neutralCool = {
  99: "#FAFAFA",
  95: "#EAEAEA",
  90: "#BFBEBE",
  80: "#9F9F9E",
  70: "#747372",
  60: "#595857",
  50: "#444342",
  45: "#3A3838",
  40: "#2F2E2D",
  35: "#282826",
  30: "#212120",
  20: "#1A1919",
  10: "#141313",
  1: "#030303",
};

/**
 * Primitive Tokens: Primary Colors
 */
const orange = {
  95: "#FFEADE",
  90: "#FFDACA",
  80: "#FFB998",
  70: "#FF9865",
  60: "#FC7A33",
  50: "#F05C0C",
  40: "#CA4701",
  30: "#9A3400",
  20: "#682100",
  10: "#351000",
};

/**
 * Primitive Tokens: Primary Alpha Colors
 */
const orangeAlpha = {
  95: withAlpha("#F05C0C", 0.05),
  85: withAlpha("#F05C0C", 0.15),
  80: withAlpha("#F05C0C", 0.2),
  70: withAlpha("#F05C0C", 0.3),
  60: withAlpha("#F05C0C", 0.4),
  50: withAlpha("#F05C0C", 0.5),
};

/**
 * Primitive Tokens: Neutral Cool Alpha Colors
 */
const neutralCoolAlpha = {
  95: withAlpha("#444342", 0.05),
  85: withAlpha("#444342", 0.15),
  80: withAlpha("#444342", 0.2),
  70: withAlpha("#444342", 0.3),
  50: withAlpha("#444342", 0.5),
  40: withAlpha("#444342", 0.6),
};

/**
 * Primitive Color Tokens
 */
export const colors = {
  green,
  blue,
  pink,
  red,
  neutralWarm,
  neutralCool,
  orange,
  orangeAlpha,
  neutralCoolAlpha,
};

/**
 * Primitive Multiple Tokens
 */
export const multiple = {
  2: 2,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  999: 999,
};
