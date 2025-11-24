import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles';

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  borderRadius: '0.8px',
  padding: '2.2rem 0',
});

export const bannerSubtitle = style({
  ...themeVars.fontStyles.display_20r,
  color: themeVars.color.black,
});
export const bannerTitle = style({
  ...themeVars.fontStyles.display_36b,
  color: themeVars.color.black,
  textAlign: 'center',
});
