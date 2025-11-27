import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'sticky',
  display: 'grid',
  marginRight: '-0.35rem',
  bottom: '4.8rem',
  marginLeft: 'auto',
  marginTop: '-13rem',
  gap: '1.2rem',
});

export const buttonContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const popupContainer = style({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});
