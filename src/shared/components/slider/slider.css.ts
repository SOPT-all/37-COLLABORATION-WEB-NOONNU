import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const container = style({
  display: 'flex',
  height: '2rem',
  gap: '0.8rem',
  alignItems: 'center',
  width: '100%',
});

export const label = style({
  ...themeVars.fontStyles.body_14r,
  color: themeVars.color.black,
  whiteSpace: 'nowrap',
});

export const sliderContainer = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
  flex: 1,
});

export const slider = style({
  width: '100%',
  WebkitAppearance: 'none',

  selectors: {
    '&::-webkit-slider-runnable-track': {
      backgroundColor: themeVars.color.gray_03,
      height: '0.1rem',
      borderRadius: '0.1rem',
    },
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      height: '1.6rem',
      width: '1.6rem',
      borderRadius: '50%',
      backgroundColor: themeVars.color.primary,
      transition: 'all 0.1s ease-in-out',
      cursor: 'pointer',
      marginTop: '-0.8rem',
    },
    '&:hover::-webkit-slider-thumb': {
      height: '2rem',
      width: '2rem',
      marginTop: '-1rem',
    },
  },
});

export const value = style({
  ...themeVars.fontStyles.body_14r,
  color: themeVars.color.black,
  whiteSpace: 'nowrap',
});
