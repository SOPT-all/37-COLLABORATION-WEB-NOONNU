import { useCallback, useState } from 'react';

import type { SortType } from '@/shared/types/drop-down';

export const useStorageAction = () => {
  const [globalPhrase, setGlobalPhrase] = useState('');
  const [fontSize, setFontSize] = useState(30);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState<SortType>('인기순');

  const handleSizeChange = useCallback(
    (value: number) => setFontSize(value),
    [],
  );
  const handleGlobalPhraseChange = (value: string) => setGlobalPhrase(value);
  const handleSearchChange = (value: string) => setSearchText(value);

  return {
    globalPhrase,
    fontSize,
    searchText,
    sortOption,
    actions: {
      setSortOption,
      handleSizeChange,
      handleGlobalPhraseChange,
      handleSearchChange,
    },
  };
};
