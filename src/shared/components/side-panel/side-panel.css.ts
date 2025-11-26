import { style } from '@vanilla-extract/css';

import { themeVars } from '../../styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '31.2rem',
  height: '71.2rem',
  backgroundColor: themeVars.color.gray_01,
  borderRadius: '8px',
  overflowY: 'auto',
  padding: '2.4rem 1.6rem 2.8rem 1.6rem',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1.5px solid ${themeVars.color.gray_03}`,
  paddingBottom: '2.8rem',
});

export const filterLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const filterIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const filterText = style({
  ...themeVars.fontStyles.body_18sb,
  color: themeVars.color.black,
});

export const resetButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  ...themeVars.fontStyles.body_14m,
  color: themeVars.color.gray_04,
});

export const resetText = style({
  ...themeVars.fontStyles.body_14m,
});

export const resetIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const content = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2.8rem',
  gap: '2.8rem',
});

export const sectionDivider = style({
  borderTop: `1.5px solid ${themeVars.color.gray_03}`,
  paddingTop: '2.8rem',
});
