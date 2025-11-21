import { createVar, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const fontFamilyVar = createVar();
export const fontWeightVar = createVar();

export const listViewContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const listTitleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '5.2rem',
  padding: '1.2rem 2rem',
  border: `1px solid ${themeVars.color.gray_02}`,
  borderRadius: '4px 4px 0 0',

  selectors: {
    [`${listViewContainer}:hover &`]: {
      borderBottomColor: themeVars.color.primary,
    },
  },
});

export const fontInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

export const fontName = style({
  ...themeVars.fontStyles.font_title,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,

  selectors: {
    [`${listViewContainer}:hover &`]: {
      backgroundColor: themeVars.color.primary,
    },
  },
});

export const fontProducer = style({
  ...themeVars.fontStyles.font_detail,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,
});

export const userActionContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '3.2rem',
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

export const phraseContainer = style({
  display: 'flex',
  alignItems: 'flex-start',
  height: '10.8rem',
  padding: '4rem 2rem',
  borderRadius: '0 0 4px 4px',
  borderRight: `1px solid ${themeVars.color.gray_02}`,
  borderBottom: `1px solid ${themeVars.color.gray_02}`,
  borderLeft: `1px solid ${themeVars.color.gray_02}`,
});

export const arrowIcon = style({
  opacity: 0,

  selectors: {
    [`${listViewContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

export const editInput = style({
  width: '100%',
  whiteSpace: 'nowrap',
  overflowX: 'auto',
  ...themeVars.fontStyles.font_sample,
  fontFamily: fontFamilyVar,
  fontWeight: fontWeightVar,

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
