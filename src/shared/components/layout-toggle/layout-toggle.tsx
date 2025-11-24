import { GridviewIcon, ListviewIcon, WordviewIcon } from '@/shared/icons';

import * as styles from './layout-toggle.css';

export const TOGGLE = {
  GRID: 'grid',
  LIST: 'list',
  WORD: 'word',
} as const;

export type LayoutToggleType = (typeof TOGGLE)[keyof typeof TOGGLE];

interface LayoutToggleProps {
  value: LayoutToggleType;
  onClick: (nextLayout: LayoutToggleType) => void;
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
          onClick={() => onClick(TOGGLE.WORD)}
        >
          <WordviewIcon />
        </button>
      </div>
    </>
  );
};
