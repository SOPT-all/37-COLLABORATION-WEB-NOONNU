import { createVar, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const fontFamilyVar = createVar();
export const fontWeightVar = createVar();

export const cardViewContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const cardTitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '8.4rem',
  padding: '2rem 2rem 1.6rem 2rem',
  border: `1px solid ${themeVars.color.gray_02}`,
  borderRadius: '4px 4px 0 0',
  gap: '0.8rem',
  cursor: 'pointer',

  selectors: {
    [`${cardViewContainer}:hover &`]: {
      borderBottomColor: themeVars.color.primary,
    },
  },
});

export const fontNameContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const fontName = style({
  ...themeVars.fontStyles.font_title,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,

  selectors: {
    [`${cardViewContainer}:hover &`]: {
      backgroundColor: themeVars.color.primary,
    },
  },
});

export const arrowIcon = style({
  opacity: 0,

  selectors: {
    [`${cardViewContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

export const fontProducer = style({
  ...themeVars.fontStyles.font_detail,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,
});

export const phraseContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '20.8rem',
  padding: '1.6rem 2rem',
  borderRadius: '0 0 4px 4px',
  borderRight: `1px solid ${themeVars.color.gray_02}`,
  borderBottom: `1px solid ${themeVars.color.gray_02}`,
  borderLeft: `1px solid ${themeVars.color.gray_02}`,
});

export const editInput = style({
  height: '100%',
  outline: 'none',
  resize: 'none',
  ...themeVars.fontStyles.font_sample,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,

  selectors: {
    '&::-webkit-scrollbar': {
      width: '10px',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: themeVars.color.gray_04,
      borderRadius: '8px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: themeVars.color.gray_02,
      borderRadius: '8px',
    },
  },
});

export const userActionContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1.5rem',
});

export const fontThicknessNum = style({
  ...themeVars.fontStyles.font_detail,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,
});

export const actionButtonContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
