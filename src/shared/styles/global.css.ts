import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

globalStyle('html, body', {
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', Pretendard, sans-serif`,
});

export const rootStyle = style({ backgroundColor: themeVars.color.white });
