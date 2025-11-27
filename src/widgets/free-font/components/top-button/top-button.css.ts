import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const button = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: themeVars.color.gray_03,

  position: 'sticky',
  display: 'flex',

  marginBottom: '1.2rem',
  marginLeft: 'auto',
  backgroundColor: themeVars.color.white,
  border: `1px solid ${themeVars.color.gray_03}`,
});

export const hidden = style({
  opacity: 0,
  pointerEvents: 'none',
  transform: 'translateY(10px)',
});

export const visible = style({
  opacity: 1,
  pointerEvents: 'auto',
  transform: 'translateY(0)',
});
