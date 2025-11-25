import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles';
import { fontStyles } from '@/shared/styles/tokens/font-style';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  height: '2.8rem',
  gap: '1.6rem',
});

export const tabButton = recipe({
  base: {
    ...fontStyles.body_20sb,
    display: 'flex',
    background: 'transparent',
    padding: 0,
    cursor: 'pointer',
  },

  variants: {
    state: {
      active: {
        color: themeVars.color.black,
      },
      inactive: {
        color: themeVars.color.gray_04,
      },
    },
  },

  defaultVariants: {
    state: 'inactive',
  },
});

export const divider = style({
  display: 'inline-block',
  width: '0.2rem',
  height: '1.8rem',
  backgroundColor: themeVars.color.gray_04,
});
