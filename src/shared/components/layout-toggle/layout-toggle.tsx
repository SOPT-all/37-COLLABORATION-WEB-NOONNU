import { GridviewIcon, ListviewIcon, WordviewIcon } from '@/shared/icons';

import * as styles from './layout-toggle.css';

// 토글 타입 & 상수 선언
export const TOGGLE = {
  GRID: 'grid',
  LIST: 'list',
  WORD: 'word',
} as const;

// 'grid' | 'list | 'word' 중 하나
export type LayoutToggleType = (typeof TOGGLE)[keyof typeof TOGGLE];

//인터페이스
interface LayoutToggleProps {
  value: LayoutToggleType; // 현재 선택된 레이아웃 타입
  onClick: (nextLayout: LayoutToggleType) => void; // 레이아웃이 바뀌었음을 부모에게 알려주는 콜백
}

export const LayoutToggle = ({ value, onClick }: LayoutToggleProps) => {
  const isGridSelected = value === TOGGLE.GRID;
  const isListSelected = value === TOGGLE.LIST;
  const isWordSelected = value === TOGGLE.WORD;
  return (
    <>
      <div className={styles.toggleContainer}>
        <button
          type='button'
          className={styles.toggleButton({ selected: isGridSelected })}
          onClick={() => onClick(TOGGLE.GRID)}
        >
          <GridviewIcon />
        </button>

        <button
          type='button'
          className={styles.toggleButton({ selected: isListSelected })}
          onClick={() => onClick(TOGGLE.LIST)}
        >
          <ListviewIcon />
        </button>

        <button
          type='button'
          className={styles.toggleButton({ selected: isWordSelected })}
        >
          <WordviewIcon />
        </button>
      </div>
    </>
  );
};
