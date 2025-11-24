import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles';

export const headerContainer = style({
  display: 'flex',
  padding: '0 3.2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.05)`,
});

export const leftContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.4rem',
});

export const textButtonContainer = style({
  display: 'flex',
});

export const textButton = recipe({
  base: {
    ...themeVars.fontStyles.header_16m,
    display: 'inline-flex',
    alignItems: 'center',
    padding: '1.6rem 2.4rem 1.4rem',
    borderBottom: '2px solid transparent',
    ':hover': {
      borderBottom: `2px solid ${themeVars.color.primary}`,
      transitionDuration: '0.15s',
    },
  },
  variants: {
    isEqual: {
      true: {
        borderBottom: `2px solid ${themeVars.color.primary}`,
      },
    },
  },
});

export const rightContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

export const inputContainer = style({
  width: '32rem',
});

export const iconContainer = style({
  display: 'flex',
  gap: '0.8rem',
});

export const icon = style({
  padding: '0.8rem',
  cursor: 'pointer',
});
