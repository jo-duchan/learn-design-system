import { css } from "styled-components";

const headline1 = {
  bold: css`
    font-size: 32px;
    font-weight: 700;
    line-height: 130%;
  `,
  regular: css`
    font-size: 32px;
    font-weight: 500;
    line-height: 130%;
  `,
};

const headline2 = {
  bold: css`
    font-size: 28px;
    font-weight: 700;
    line-height: 130%;
  `,
  regular: css`
    font-size: 28px;
    font-weight: 500;
    line-height: 130%;
  `,
};

const title1 = {
  bold: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
  `,
  semiBold: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
  `,
};

const title2 = {
  bold: css`
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
  `,
  semiBold: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
  `,
};

const title3 = {
  regular: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  `,
};

const body1 = {
  bold: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
  `,
  semiBold: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
  `,
  regular: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
  `,
};

const body2 = {
  bold: css`
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
  `,
  semiBold: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
  `,
  regular: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
  `,
};

const caption = {
  regular: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 125%;
  `,
};

/**
 *
 */
const textStyles = {
  headline1,
  headline2,
  title1,
  title2,
  title3,
  body1,
  body2,
  caption,
};

export default textStyles;
