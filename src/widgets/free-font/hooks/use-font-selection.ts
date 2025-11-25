import { useState, useCallback } from 'react';
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

  const deleteFont = useCallback(
    (id: number) => {
      const targetFont = selectedFonts.find((font) => font.id === id);
      const fontName = targetFont ? targetFont.name : '선택한 폰트';

      if (window.confirm(`${fontName}을(를) 삭제할까요?`)) {
        setSelectedFonts((prev) => prev.filter((item) => item.id !== id));
      }
    },
    [selectedFonts],
  );

  const clearFonts = useCallback(() => {
    if (window.confirm('폰트비교에 담긴 모든 폰트를 삭제할까요?')) {
      setSelectedFonts([]);
    }
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
