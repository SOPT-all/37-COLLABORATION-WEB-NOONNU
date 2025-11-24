import { GridviewIcon, ListviewIcon, WordviewIcon } from '@/shared/icons';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';

import * as styles from './layout-toggle.css';

interface LayoutToggleProps {
  value: LayoutToggleType;
  onClick: (nextLayout: LayoutToggleType) => void;
}

export const LayoutToggle = ({ value, onClick }: LayoutToggleProps) => {
  const isSelected = (target: LayoutToggleType) => value === target;
  return (
    <div className={styles.toggleContainer}>
      <button
        type='button'
        className={styles.toggleButton({
          selected: isSelected(TOGGLE.GRID),
        })}
        onClick={() => onClick(TOGGLE.GRID)}
      >
        <GridviewIcon />
      </button>

      <button
        type='button'
        className={styles.toggleButton({
          selected: isSelected(TOGGLE.LIST),
        })}
        onClick={() => onClick(TOGGLE.LIST)}
      >
        <ListviewIcon />
      </button>

      <button
        type='button'
        className={styles.toggleButton({
          selected: isSelected(TOGGLE.WORD),
        })}
        onClick={() => onClick(TOGGLE.WORD)}
      >
        <WordviewIcon />
      </button>
    </div>
  );
};
