import { createTheme } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { fontStyles } from './tokens/font-style';
import { typography } from './tokens/typography';

const tokens = {
  color: color,
  fontStyles: fontStyles,
  ...typography,
};

const [themeClass, themeVars] = createTheme(tokens);

export { themeClass, themeVars, tokens };
