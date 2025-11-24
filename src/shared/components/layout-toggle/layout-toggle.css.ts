import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles';

export const toggleContainer = style({
  display: 'flex',
  width: '9.8rem',
  border: `1px solid ${themeVars.color.gray_03}`,
  borderRadius: '4px',
  overflow: 'hidden',
});

export const toggleButton = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.4rem',
    backgroundColor: 'transparent',
    color: themeVars.color.gray_04,
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    selectors: {
      '&:not(:first-child)': {
        borderLeft: `1px solid ${themeVars.color.gray_03}`,
      },
      '&:hover': {
        backgroundColor: themeVars.color.gray_01,
        color: themeVars.color.black,
      },
    },
  },

  variants: {
    selected: {
      true: {
        color: themeVars.color.black,
      },
      false: {},
    },
  },

  defaultVariants: {
    selected: false,
  },
});
