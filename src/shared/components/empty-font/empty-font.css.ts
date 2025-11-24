import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

export const emptyfontContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.8rem',
  padding: '11.1rem 30.7rem 15.6rem 30.7rem',
});

export const errorMessage = style({
  ...themeVars.fontStyles.display_36b,
});
