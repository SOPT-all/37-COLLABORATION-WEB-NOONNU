import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles';

export const allContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
});

export const triggerContainer = style({
  display: 'flex',
  gap: '0.4rem',
  padding: '0.4rem 0.4rem 0.4rem 0.8rem',
});

export const sortText = style({
  ...themeVars.fontStyles.body_16m,
});

export const menuContainer = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '9.6rem',
  top: '100%',
  marginTop: '0.8rem',
  backgroundColor: themeVars.color.white,
  borderRadius: '4px',
  border: `1px solid ${themeVars.color.gray_03}`,
});

export const itemContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '4.2rem',
    ':hover': {
      backgroundColor: themeVars.color.gray_01,
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: themeVars.color.gray_01,
      },
    },
  },
});
