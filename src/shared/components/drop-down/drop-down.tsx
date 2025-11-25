import { createContext, useContext, useState } from 'react';

import { ArrowDownSmIcon, ArrowUpSmIcon } from '@/shared/icons';

import * as styles from './drop-down.css';
import type {
  DropDownContextType,
  DropDownItemProps,
  DropDownMenuProps,
  DropDownProps,
  SortType,
} from './types/type';

const DropDownContext = createContext<DropDownContextType | null>(null);

export const useDropDownContext = () => {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error('DropDown 컴포넌트 내부에서만 사용 가능해요.');
  }
  return context;
};

const DropDown = ({
  initialSort = '인기순',
  defaultOpen = false,
  children,
  onChange,
}: DropDownProps) => {
  const [sort, setSort] = useState<SortType>(initialSort);
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const selectSort = (next: SortType) => {
    setSort(next);
    setIsOpen(false);
    onChange?.(next);
  };
  return (
    <DropDownContext.Provider value={{ sort, isOpen, toggleOpen, selectSort }}>
      <div className={styles.allContainer}>{children}</div>
    </DropDownContext.Provider>
  );
};

const DropDownTrigger = () => {
  const { sort, isOpen, toggleOpen } = useDropDownContext();
  return (
    <button
      type='button'
      className={styles.triggerContainer}
      onClick={toggleOpen}
    >
      <span className={styles.sortText}>{sort}</span>
      {isOpen ? (
        <ArrowUpSmIcon width={24} height={24} />
      ) : (
        <ArrowDownSmIcon width={24} height={24} />
      )}
    </button>
  );
};

const DropDownMenu = ({ children }: DropDownMenuProps) => {
  const { isOpen } = useDropDownContext();
  if (!isOpen) {
    return null;
  }
  return <div className={styles.menuContainer}>{children}</div>;
};

const DropDownItem = ({ children }: DropDownItemProps) => {
  return (
    <button className={styles.itemContainer}>
      <p className={styles.sortText}>{children}</p>
    </button>
  );
};

DropDown.Trigger = DropDownTrigger;
DropDown.Menu = DropDownMenu;
DropDown.Item = DropDownItem;

export default DropDown;
