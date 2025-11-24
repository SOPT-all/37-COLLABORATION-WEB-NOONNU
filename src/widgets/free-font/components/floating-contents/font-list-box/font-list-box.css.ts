import { createVar, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';

const FADE_SIZE = '29px';

export const fontWeightVar = createVar();
export const fontFamilyVar = createVar();

export const outerContainer = style({
  display: 'flex',
  flexDirection: 'column',

  width: '22.8rem',
  overflowX: 'hidden',

  backgroundColor: themeVars.color.white,
  border: `1px solid ${themeVars.color.gray_03}`,
  borderRadius: '20px',

  scrollBehavior: 'smooth',
});

export const innerContainer = style({
  maxHeight: '22.8rem',
  overflowY: 'auto',
  scrollbarWidth: 'none',

  selectors: {
    '&:not(:empty)': {
      WebkitMaskImage: `
            linear-gradient(
                to bottom, 
                transparent, 
                black ${FADE_SIZE}
            ),
            linear-gradient(
                to top,
                transparent,
                black ${FADE_SIZE}
            )
        `,
      WebkitMaskSize: `100% 100%`,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskComposite: 'source-in',
      WebkitMaskPosition: 'top, bottom',
    },
  },
});

export const listContainer = style({
  padding: '1.2rem 0',

  borderBottom: `1px solid ${themeVars.color.gray_03}`,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});
