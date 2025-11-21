import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles';

export const container = style({
  width: '22.8rem',
  maxHeight: '22.8rem',

  overflowY: 'auto',

  border: `1px solid ${themeVars.color.gray_03}`,
  borderRadius: '20px',

  backgroundColor: themeVars.color.white,

  display: 'flex',
  flexDirection: 'column',

  scrollbarWidth: 'none',
});

export const listContainer = style({
  borderBottom: `1px solid ${themeVars.color.gray_03}`,
  padding: '1.2rem 0',
});
