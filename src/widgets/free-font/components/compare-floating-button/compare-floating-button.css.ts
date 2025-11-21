import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const compareBtnStyle = style({
  display: 'flex',
  width: '18.8rem',
  height: '7.6rem',
  padding: '2.4rem 3.2rem',
  justifyContent: 'center',
  borderRadius: '99px',
  border: `1px solid ${themeVars.color.primary_dark_01}`,
  backgroundColor: themeVars.color.primary,
  gap: '0.4rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  ...themeVars.fontStyles.body_20sb,

  ':hover': {
    backgroundColor: themeVars.color.primary_dark_01,
    borderColor: themeVars.color.primary_dark_02,
  },
});

export const arrowIconStyle = style({
  maxWidth: 0,
  opacity: 0,
  transition: 'all 0.2s ease',
  flexShrink: 0,

  selectors: {
    [`${compareBtnStyle}:hover &`]: {
      maxWidth: '24px',
      opacity: 1,
    },
  },
});
