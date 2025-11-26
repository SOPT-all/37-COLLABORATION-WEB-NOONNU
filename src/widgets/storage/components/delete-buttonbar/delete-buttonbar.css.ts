import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const deleteBtnContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const deleteBtn = style({
  ...themeVars.fontStyles.body_16m,
  color: themeVars.color.negative,
});
