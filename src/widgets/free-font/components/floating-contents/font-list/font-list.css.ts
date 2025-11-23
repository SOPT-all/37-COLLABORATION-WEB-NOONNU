import { createVar, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const fontWeightVar = createVar();
export const fontFamilyVar = createVar();

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.6rem 0 2rem',
});

export const fontStyle = style({
  flex: 1,

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

  fontWeight: fontWeightVar,
  fontSize: '2rem',
  fontFamily: fontFamilyVar,
});

export const deleteBtn = style({
  margin: '0.6rem',
  color: themeVars.color.gray_03,
  transition: 'color 0.1s ease-in-out',

  selectors: {
    '&:hover': {
      color: themeVars.color.negative,
      cursor: 'pointer',
    },
  },
});
