import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles';

export const toastContainer = style({
  width: '44.3rem',
  height: '5.2rem',
  minHeight: '5.2rem',
  padding: '1.6rem',
  marginRight: '1.1rem',

  border: `1px solid ${themeVars.color.gray_03}`,
  backgroundColor: themeVars.color.white,
  boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.10)`,
  borderRadius: '12px',
});

export const container = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});

export const character = style({
  width: '2rem',
  height: '2rem',
  marginRight: '1.2rem',
});

export const message = style({
  margin: '0',
  ...themeVars.fontStyles.body_14m,
  color: themeVars.color.black,
});

export const xIcon = style({
  marginLeft: 'auto',
});
