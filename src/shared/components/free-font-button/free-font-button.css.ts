import { style } from '@vanilla-extract/css';

import { themeVars } from '../../styles/theme.css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '10rem',
  height: '4rem',
  padding: '0.8rem 0.8rem 0.8rem 1.6rem',
  borderRadius: '4px',
  border: `1px solid ${themeVars.color.primary_dark_01}`,
  backgroundColor: themeVars.color.primary,

  ':hover': {
    opacity: 0.9,
  },
});

export const text = style({
  color: themeVars.color.black,
  ...themeVars.fontStyles.body_14m,
  whiteSpace: 'nowrap',
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '2.4rem',
});
