import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0px; line-height: normal;
    }
:root {

/* fonts */
--font-source-sans-pro: 'Avenir Extra Bold';
--font-open-sans: 'Avenir';
--font-manrope: Manrope;

/* font sizes */
--font-size-xl: 20px;
--font-size-5xl: 24px;
--font-size-19xl: 38px;
--font-size-sm: 14px;
--font-size-lg: 18px;
--font-size-7xl: 26px;
--font-size-13xl: 32px;
--font-size-mini: 15px;
--font-size-45xl: 64px;
--font-size-base: 16px;

/* Colors */
--color-white: #fff;
--color-whitesmoke-100: #f0f0f0;
--color-black: #000;
--color-dimgray-100: #717171;
--color-dimgray-200: #696969;
--color-gray-100: rgba(141, 141, 141, 0.5);
--color-gray-200: rgba(0, 0, 0, 0.5);
--color-gray-300: rgba(0, 0, 0, 0.63);
--color-yellow: rgba(255, 245, 0, 0.2);
--color-silver: #c6c6c6;

/* border radiuses */
--br-28xl: 47px;
--br-4xs: 9px;
--br-39xl: 58px;
--br-44xl: 63px;
--br-35xl: 54px;
--br-8xs: 5px;

}
`;
