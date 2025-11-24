import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '22.8rem',
  height: '6rem',

  borderRadius: '20px',
  border: `1px solid ${themeVars.color.gray_03}`,
  backgroundColor: themeVars.color.white,
});

export const buttonText = style({
  ...themeVars.fontStyles.body_18sb,
  color: themeVars.color.negative,
});
