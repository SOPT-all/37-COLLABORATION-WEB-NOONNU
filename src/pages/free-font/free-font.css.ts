import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '2rem 3.2rem 6.8rem',
  width: '100%',
  minHeight: '100vh',
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
});

export const cardSection = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30.4rem, 1fr))',
  rowGap: '1.6rem',
  columnGap: '2.1rem',
  width: '100%',
});

export const listSection = style({ display: 'grid', gap: '1.2rem' });
