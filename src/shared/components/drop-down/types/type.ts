import type { ReactNode } from 'react';

export type SortType = '인기순' | '조회순' | '최신순' | '이름순';

export interface DropDownContextType {
  sort: SortType;
  isOpen: boolean;
  toggleOpen: () => void;
  selectSort: (nenxt: SortType) => void;
}

export interface DropDownProps {
  initialSort: SortType;
  defaultOpen?: boolean;
  children: ReactNode;
  onChange?: (value: SortType) => void;
}

export interface DropDownMenuProps {
  children: ReactNode;
}

export interface DropDownItemProps {
  children: ReactNode;
}
