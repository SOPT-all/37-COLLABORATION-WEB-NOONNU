import { GridviewIcon, ListviewIcon, WordviewIcon } from '@/shared/icons';

import { themeVars } from '../styles';
import * as styles from './layout-toggle.css';

// 토글 타입 & 상수 선언
export const TOGGLE = {
  GRID: 'grid',
  LIST: 'list',
  WORD: 'word',
} as const;

// 'grid' | 'list | 'word' 중 하나
export type layoutToggleType = (typeof TOGGLE)[keyof typeof TOGGLE];

//인터페이스
interface layoutToggleTypeProps {
  value: layoutToggleType; // 현재 선택된 레이아웃 타입
  onClick: (nextLayout: layoutToggleType) => void; // 레이아웃이 바뀌었음을 부모에게 알려주는 콜백
}

// icon 컬러 변경
// const getToggleColor = (
//   value: layoutToggleType,
//   target: layoutToggleType,
// ) =>
//   value === target ? themeVars.color.black : themeVars.color.gray_04;

export const LayoutToggle = ({ value, onClick }: layoutToggleTypeProps) => {
  const toggleColor = (valueToggle: string) =>
    value === valueToggle
      ? `${themeVars.color.black}`
      : `${themeVars.color.gray_04}`;

  return (
    <>
      <div className={styles.toggleContainer}>
        <button
          type='button'
          className={styles.toggleButton({
            selected: value === TOGGLE.GRID,
          })}
          onClick={() => {
            onClick(TOGGLE.GRID);
          }}
        >
          <GridviewIcon color={toggleColor(TOGGLE.GRID)} />
        </button>

        <button
          type='button'
          className={styles.toggleButton({
            selected: value === TOGGLE.LIST,
          })}
          onClick={() => {
            onClick(TOGGLE.LIST);
          }}
        >
          <ListviewIcon color={toggleColor(TOGGLE.LIST)} />
        </button>

        <button
          type='button'
          className={styles.toggleButton({
            selected: value === TOGGLE.WORD,
          })}
        >
          <WordviewIcon color={toggleColor(TOGGLE.WORD)} />
        </button>
      </div>
    </>
  );
};
