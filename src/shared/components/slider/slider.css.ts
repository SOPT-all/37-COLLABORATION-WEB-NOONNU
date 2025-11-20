import { themeVars } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '1rem',
  width: '100%',
});

export const label = style({
  ...themeVars.fontStyles.body_14r,
  color: themeVars.color.black,
});

export const sliderContainer = style({ display: 'flex', gap: '1rem' });

export const slider = style({
  selectors: {
    // 슬라이더 트랙
    '&::-webkit-slider-runnable-track': {
      backgroundColor: themeVars.color.gray_03,
      height: '0.2rem',
    },
    // 슬라이더 핸들
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      height: '1.6rem',
      width: '1.6rem',
      borderRadius: '50%',
      backgroundColor: themeVars.color.primary,
      transition: 'all 0.1s ease-in-out',

      // 막대기 중앙에 오도록 위치 조정
      marginTop: '-0.7rem',
    },
    // 슬라이더 핸들 호버시
    '&:hover::-webkit-slider-thumb': {
      height: '2rem',
      width: '2rem',
      marginTop: '-0.9rem',
    },
  },
});

export const value = style({
  display: 'flex',
  ...themeVars.fontStyles.body_14r,
  color: themeVars.color.black,
});
