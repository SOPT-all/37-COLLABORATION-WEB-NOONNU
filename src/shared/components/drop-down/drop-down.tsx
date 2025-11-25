import { useState } from 'react';

import { ArrowDownSmIcon, ArrowUpSmIcon } from '@/shared/icons';
import type { SortType } from '@/shared/types/drop-down';

import * as styles from './drop-down.css';

const SORT_OPTIONS = ['인기순', '조회순', '최신순', '이름순'] as const;

interface DropDownProps {
  value: SortType;
  onChange: (next: SortType) => void;
}

const DropDown = ({ value, onChange }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (next: SortType) => {
    onChange(next);
    setIsOpen(false);
  };

  const sortedOptions = [
    value,
    ...SORT_OPTIONS.filter((option) => option !== value),
  ];

  return (
    <div className={styles.allContainer}>
      <button
        type='button'
        className={styles.triggerContainer}
        onClick={toggleOpen}
      >
        <span className={styles.sortText}>{value}</span>
        {isOpen ? (
          <ArrowUpSmIcon width={24} height={24} />
        ) : (
          <ArrowDownSmIcon width={24} height={24} />
        )}
      </button>

      {isOpen && (
        <div className={styles.menuContainer}>
          {sortedOptions.map((option) => (
            <button
              key={option}
              type='button'
              onClick={() => handleSelect(option)}
              className={styles.itemContainer}
            >
              <p className={styles.sortText}>{option}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
