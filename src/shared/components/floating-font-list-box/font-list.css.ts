import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles';

export const container = style({
  display: 'flex',
  width: '22.7rem',
  padding: '0 1.6rem 0 2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const fontStyle = style({ fontSize: '2rem' });

export const deleteBtn = style({
  margin: '0.6rem',
  color: themeVars.color.gray_03,
  transition: 'color 0.1s ease-in-out',

  selectors: {
    '&:hover': {
      color: themeVars.color.negative,
      cursor: 'pointer',
    },
  },
});
