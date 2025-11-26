import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const fontToolBar = style({
  display: 'flex',
  padding: '1.2rem 0',
  marginTop: '2.8rem',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const fieldControl = style({
  display: 'flex',
  gap: '3.6rem',
  alignItems: 'center',
  marginRight: '2.1rem',
});

export const searchInput = style({
  width: '19.6rem',
});

export const slider = style({
  width: '20rem',
});

export const previewInput = style({
  width: '26.8rem',
});

export const layoutControl = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.1rem',
});

// 임시 영역 스타일링
export const dropdownComponent = style({
  width: '7rem',
  height: '2.8rem',
  backgroundColor: themeVars.color.gray_03,
});
