import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '28rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const subtitle = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.body_16sb,
});

export const toggleButton = style({
  color: themeVars.color.gray_04,
});

export const filterSet = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '2rem',
  gap: '2.8rem',
});

export const filterSetHidden = style([
  filterSet,
  {
    display: 'none',
  },
]);
