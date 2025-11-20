import { style } from '@vanilla-extract/css';

import { themeVars } from '../../styles/theme.css';

export const chip = style({
  display: 'flex',
  width: '88px',
  height: '36px',
  padding: '8px 24px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  flexShrink: 0,
  borderRadius: '4px',
  border: `1px solid ${themeVars.color.gray_02}`,
  background: themeVars.color.white,
  color: themeVars.color.black,
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const chipSelected = style({
  border: `1px solid ${themeVars.color.primary_dark_01}`,
});

export const chipTitle = style([
  chip,
  {
    fontWeight: 700,
  },
]);
