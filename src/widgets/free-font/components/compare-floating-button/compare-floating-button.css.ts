import { keyframes, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

const baseButtonStyle = style({
  display: 'flex',
  position: 'fixed',
  bottom: '4.8rem',
  right: '2.8rem',
  width: '18.8rem',
  padding: '2.4rem 0',
  justifyContent: 'center',
  borderRadius: '99px',
  whiteSpace: 'nowrap',
  ...themeVars.fontStyles.body_20sb,
});

export const compareButton = style([
  baseButtonStyle,
  {
    border: `1px solid ${themeVars.color.primary_dark_01}`,
    backgroundColor: themeVars.color.primary,
    gap: '0.4rem',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: themeVars.color.primary_dark_01,
      borderColor: themeVars.color.primary_dark_02,
    },
  },
]);

export const arrowIconStyle = style({
  maxWidth: 0,
  opacity: 0,
  transition: 'all 0.2s ease',
  flexShrink: 0,

  selectors: {
    [`${compareButton}:hover &`]: {
      maxWidth: '24px',
      opacity: 1,
    },
  },
});

const slideUp = keyframes({
  '0%': { transform: 'translateY(100%)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
});

export const textContainer = style({
  display: 'inline-flex',
  overflow: 'hidden',
  flexShrink: 0,
});

export const animateText = style({
  animation: `${slideUp} 0.3s ease`,
});

export const emptyButton = style([
  baseButtonStyle,
  {
    border: `1px solid ${themeVars.color.gray_03}`,
    backgroundColor: themeVars.color.gray_02,
    color: themeVars.color.gray_04,
    cursor: 'not-allowed',
  },
]);
