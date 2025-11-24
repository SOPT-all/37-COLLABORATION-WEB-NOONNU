import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const footerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '41rem',
  padding: '5.6rem 5.2rem 6rem 5.2rem',
  backgroundColor: themeVars.color.black,
  color: themeVars.color.gray_03,
  gap: '1.6rem',
  whiteSpace: 'nowrap',
});

export const logo = style({
  flexShrink: 0,
});

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const mainText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  ...themeVars.fontStyles.body_16m,
});

export const linkList = style({
  display: 'flex',
  alignItems: 'center',
});

export const linkItem = style({
  selectors: {
    '&:not(:last-of-type)::after': {
      content: '"|"',
      margin: '0 0.2rem',
    },
  },
});

export const addSeperator = style({
  selectors: {
    '&::after': {
      content: '"|"',
      margin: '0 0.2rem',
    },
  },
});

export const sideContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.8rem',
});

export const sideText = style({
  display: 'flex',
  gap: '5.6rem',
});

export const sideTextName = style({
  marginBottom: '1.2rem',
  ...themeVars.fontStyles.body_16sb,
});

export const sideTextContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  ...themeVars.fontStyles.body_16m,
});

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '2.8rem',
  cursor: 'pointer',
});

export const businessInformationText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  ...themeVars.fontStyles.body_14m,
});
