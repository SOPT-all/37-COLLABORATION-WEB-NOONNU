import { useCallback, useState } from 'react';

import type { FontItemType } from '@/shared/types/font';

export const useFontSelection = () => {
  const [selectedFonts, setSelectedFonts] = useState<FontItemType[]>([]);

  const toggleFont = useCallback((font: FontItemType) => {
    setSelectedFonts((prev) => {
      const isExists = prev.some((item) => item.id === font.id);
      if (isExists) {
        return prev.filter((item) => item.id !== font.id);
      }
      return [...prev, font];
    });
  }, []);

  const deleteFont = useCallback((id: number) => {
    setSelectedFonts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearFonts = useCallback(() => {
    setSelectedFonts([]);
  }, []);

  const isSelected = useCallback(
    (id: number) => selectedFonts.some((font) => font.id === id),
    [selectedFonts],
  );

  return {
    selectedFonts,
    toggleFont,
    deleteFont,
    clearFonts,
    isSelected,
  };
};
