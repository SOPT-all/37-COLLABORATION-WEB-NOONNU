import { globalStyle } from '@vanilla-extract/css';

import * as layers from './layers.css.ts';

globalStyle(
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  {
    '@layer': {
      [layers.reset]: {
        all: 'unset',
        display: 'revert',
      },
    },
  },
);

/**
 * 기본 box-sizing border-box로 설정
 * Preferred box-sizing value
 */
globalStyle('*, *::before, *::after', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
    },
  },
});

/**
 * a 태그와 button 태그에 pointer 재적용
 * Reapply the pointer cursor for anchor tags
 */
globalStyle('a, button', {
  '@layer': {
    [layers.reset]: {
      cursor: 'pointer',
    },
  },
});

/**
 * 리스트 스타일 제거 (불릿/넘버)
 * Remove list styles (bullets/numbers)
 */
globalStyle('ol, ul, menu, summary', {
  '@layer': {
    [layers.reset]: {
      listStyle: 'none',
    },
  },
});

/**
 * 이미지 요소가 컨테이너의 크기를 넘지 않도록 설정
 * For images to not be able to exceed their container
 */
globalStyle('img', {
  '@layer': {
    [layers.reset]: {
      maxInlineSize: '100%',
      maxBlockSize: '100%',
    },
  },
});

/**
 * 테이블 셀 사이의 기본 간격을 제거
 * Removes spacing between cells in tables
 */
globalStyle('table', {
  '@layer': {
    [layers.reset]: {
      borderCollapse: 'collapse',
    },
  },
});

/**
 * 사파리 브라우저에서 user-select:none을 적용할 때 발생할 수 있는 문제를 방지하고, 텍스트 입력 요소가 정상적으로 동작
 * Safari - solving issue when using user-select:none on the <body> text input
 * doesn't working
 */
globalStyle('input, textarea', {
  '@layer': {
    [layers.reset]: {
      WebkitUserSelect: 'auto',
    },
  },
});

/**
 * pre 태그의 브라우저 기본 스타일을 복원, box-sizing border-box 설정
 * Preformatted text - use only for this feature
 */
globalStyle(':where(pre)', {
  '@layer': {
    [layers.reset]: {
      all: 'revert',
      boxSizing: 'border-box',
    },
  },
});

/**
 * input의 placeholder의 컬러를 지정하지 않음
 * Reset default text opacity of input placeholder
 */
globalStyle('::placeholder', {
  '@layer': {
    [layers.reset]: {
      color: 'unset',
    },
  },
});
