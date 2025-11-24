import { style } from '@vanilla-extract/css';

import { themeVars } from '../../styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const subtitle = style({
  margin: 0,
  color: themeVars.color.gray_05,
  ...themeVars.fontStyles.body_14m,
});

export const chipSet = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.8rem',
  marginTop: '1.2rem',
  width: '28rem',
});
