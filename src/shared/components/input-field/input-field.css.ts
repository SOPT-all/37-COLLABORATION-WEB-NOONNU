import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles';
import { fontStyles } from '@/shared/styles/tokens/font-style';

// 공통 인풋 컨테이너 스타일
export const baseInputFieldContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0.8rem 1.2rem',
  border: `1px solid ${themeVars.color.gray_03}`,
  borderRadius: '99px',
  backgroundColor: themeVars.color.white,
  color: themeVars.color.black,
  transition: 'all 0.25s ease',
});

// visualState에 따라 분기되는 컨테이너 스타일
export const inputFieldContainer = styleVariants({
  default: [baseInputFieldContainer],
  focused: [
    baseInputFieldContainer,
    {
      borderColor: themeVars.color.primary,
    },
  ],
  typing: [
    baseInputFieldContainer,
    {
      borderColor: themeVars.color.primary,
    },
  ],
});

// 공통 인풋 스타일
export const baseInput = style({
  ...fontStyles.body_14m,
  color: themeVars.color.black,

  selectors: {
    '&::placeholder': {
      color: themeVars.color.black,
    },
    '&:focus::placeholder': {
      color: themeVars.color.gray_03,
    },
  },
});
