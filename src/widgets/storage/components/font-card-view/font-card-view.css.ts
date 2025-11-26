import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30.4rem, 1fr))',
  rowGap: '1.6rem',
  columnGap: '2.1rem',
  width: '100%',
});
