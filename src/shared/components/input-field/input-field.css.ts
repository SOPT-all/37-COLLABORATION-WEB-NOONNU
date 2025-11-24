import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles';
import { fontStyles } from '@/shared/styles/tokens/font-style';

export const inputFieldContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0.8rem 1.2rem',
    border: `1px solid ${themeVars.color.gray_03}`,
    borderRadius: '99px',
    backgroundColor: themeVars.color.white,
    color: themeVars.color.black,

    selectors: {
      '&:focus-within': {
        borderColor: themeVars.color.primary,
      },
    },
  },
});

export const inputFieldInput = style({
  ...fontStyles.body_14m,
  flex: 1,
  color: themeVars.color.black,

  selectors: {
    '&::placeholder': {
      color: themeVars.color.black,
    },
    '&:focus::placeholder': {
      color: themeVars.color.gray_03,
    },
  },
});
