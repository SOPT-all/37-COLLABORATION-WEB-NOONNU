import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const subtitle = style({
  margin: 0,
  color: themeVars.color.gray_05,
  fontFamily: 'Pretendard',
  fontSize: '20px',
  fontWeight: 500,
});

export const chipSet = style({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '8px',
  rowGap: '8px',
  marginTop: '12px',
});
