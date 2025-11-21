import { themeVars } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  height: '2rem',
  gap: '0.8rem',
});

export const label = style({
  ...themeVars.fontStyles.body_14r,
  color: themeVars.color.black,
});

export const sliderContainer = style({
  display: 'flex',
  gap: '0.8rem',
});

export const slider = style({
  width: '17.5rem',
  selectors: {
    // 슬라이더 트랙
    '&::-webkit-slider-runnable-track': {
      backgroundColor: themeVars.color.gray_03,
      width: '17.5rem',
      height: '0.1rem',
      borderRadius: '0.1rem',
    },
    // 슬라이더 핸들
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      height: '1.6rem',
      width: '1.6rem',
      borderRadius: '50%',
      backgroundColor: themeVars.color.primary,
      transition: 'all 0.1s ease-in-out',

      // 슬라이더 핸들이 막대기 중앙에 오도록 위치 조정
      marginTop: '-0.8rem',
    },
    // 슬라이더 핸들 호버시
    '&:hover::-webkit-slider-thumb': {
      height: '2rem',
      width: '2rem',
      marginTop: '-1rem',
    },
  },
});

export const value = style({
  marginTop: '0.1rem',
  ...themeVars.fontStyles.body_14r,
  color: themeVars.color.black,
});
