import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles';

export const toggleContainer = style({
  display: 'flex',
});

export const toggleButton = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3.2rem',
    height: '3.2rem',
    border: `1px solid ${themeVars.color.gray_03}`,
    backgroundColor: 'transparent',
    color: themeVars.color.gray_04,
    cursor: 'pointer',

    selectors: {
      '&:not(:first-child)': {
        marginLeft: '-1px',
      },
      '&:first-child': {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
      },
      '&:last-child': {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
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
