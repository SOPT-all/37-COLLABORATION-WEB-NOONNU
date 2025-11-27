import { useState } from 'react';

import { fontItem } from '@/shared/mocks/font-item';
import type { FontItemType } from '@/shared/types/font';

export const useStorageData = () => {
  const [fonts, setFonts] = useState<FontItemType[]>(fontItem);

  const handleToggleLike = (id: number) => {
    setFonts((prev) =>
      prev.map((font) =>
        font.id === id ? { ...font, isLiked: !font.isLiked } : font,
      ),
    );
  };

  const handleToggleCompare = (id: number) => {
    setFonts((prev) =>
      prev.map((font) =>
        font.id === id ? { ...font, isCompared: !font.isCompared } : font,
      ),
    );
  };

  const handleDeleteAll = () => {
    if (confirm('폰트비교에 담긴 모든 폰트를 삭제할까요?')) {
      setFonts([]);
    }
  };

  return {
    fonts,
    actions: {
      handleToggleLike,
      handleToggleCompare,
      handleDeleteAll,
    },
  };
};
