import { css } from "styled-components";
import { surface } from "@/styles/tokens/alias";

const backgroundBlur = css`
  background: ${surface.dim};
  backdrop-filter: blur(1px);
`;

export { backgroundBlur };
