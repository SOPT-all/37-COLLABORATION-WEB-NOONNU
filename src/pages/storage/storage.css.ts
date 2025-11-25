import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const storagePageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4.8rem 3.2rem 6.8rem 3.2rem',
  gap: '3rem',
});

export const pageTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
  ...themeVars.fontStyles.title_28sb,
});

export const pageMainSection = style({
  display: 'flex',
  gap: '3.6rem',
});

export const fontInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const fontContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

// -----------------------------------------------

// 미완성 컴포넌트 임시 영역 스타일

export const filterComponent = style({
  width: '312px',
  backgroundColor: themeVars.color.gray_03,
  flexShrink: 0,
});
