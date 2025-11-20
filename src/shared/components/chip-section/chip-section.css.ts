import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '../../styles/theme.css';

export const chip = recipe({
  base: {
    display: 'flex',
    width: '8.8rem',
    height: '3.6rem',
    padding: '0.8rem 1.2rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.8rem',
    flexShrink: 0,
    borderRadius: '4px',
    border: `1px solid ${themeVars.color.gray_02}`,
    background: themeVars.color.white,
    color: themeVars.color.black,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    ...themeVars.fontStyles.body_14m,
  },
  variants: {
    selected: {
      true: {
        border: `1px solid ${themeVars.color.primary_dark_01}`,
      },
      false: {},
    },
    variant: {
      default: {},
      title: {},
    },
  },
  defaultVariants: {
    selected: false,
    variant: 'default',
  },
});

export const titleImage = style({
  display: 'flex',
  width: '5rem',
  height: '2rem',
  padding: '0.25rem 0.5rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  flexShrink: 0,
});
