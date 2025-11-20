import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles';

export const toastContainer = style({
  width: '44.3rem',
  height: '5.2rem',
  minHeight: '5.2rem',
  padding: '1.6rem',
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const message = style({
  ...themeVars.fontStyles.body_14m,
  color: themeVars.color.black,
});

export const xIcon = style({
  marginLeft: 'auto',
});
