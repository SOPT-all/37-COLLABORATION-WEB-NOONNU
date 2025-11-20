import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const listViewContainer = style({
  display: 'flex',
  flexDirection: 'column',
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
});

export const fontInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

export const fontName = style({
  fontFamily: 'Pretendard',
  fontSize: '2rem',
  fontWeight: 700,
  lineHeight: '2rem',
});

export const fontCompany = style({
  fontFamily: 'Pretendard',
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: '2.8rem',
});

export const userActionContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '3.2rem',
});

export const fontBold = style({
  fontFamily: 'Pretendard',
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: '2.8rem',
});

export const actionButtonContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});
