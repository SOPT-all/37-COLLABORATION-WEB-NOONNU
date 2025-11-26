import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'sticky',
  display: 'grid',
  justifyItems: 'end',
  marginRight: '-0.35rem',
  bottom: '4.8rem',
  width: 'fit-content',
  marginLeft: 'auto',
});

export const popupContainer = style({
  position: 'absolute',
  bottom: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1.2rem',
  paddingBottom: '1.2rem',
});
