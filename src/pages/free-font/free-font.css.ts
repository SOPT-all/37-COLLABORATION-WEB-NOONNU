import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles';

export const container = style({
  padding: '2rem 3.2rem 6.8rem',
});

export const banner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  borderRadius: '8px',
  padding: '2.2rem 0',
  backgroundColor: themeVars.color.bg_banner,
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

export const article = style({
  display: 'flex',
  paddingTop: '2rem',
  gap: '3.6rem',
});

export const rightSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  width: '100%',
  minWidth: 0,
  flex: 1,
});

export const articleHeader = style({
  display: 'flex',
  height: '3.8rem',
  margin: '1.2rem 2rem',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const viewSection = style({});

export const cardSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30.4rem, 1fr))',
  gap: '20px',
});
