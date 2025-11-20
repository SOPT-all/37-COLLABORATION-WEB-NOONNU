import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const listViewContainer = style({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

export const listTitleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
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

  selectors: {
    [`${listViewContainer}:hover &`]: {
      backgroundColor: themeVars.color.primary,
    },
  },
});

export const fontProducer = style({
  ...themeVars.fontStyles.font_detail,
});

export const userActionContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '3.2rem',
});

export const fontThicknessNum = style({
  ...themeVars.fontStyles.font_detail,
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

export const phrase = style({
  ...themeVars.fontStyles.font_sample,
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
  ...themeVars.fontStyles.font_sample,
});
