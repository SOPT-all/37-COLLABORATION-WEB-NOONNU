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

  return {
    fonts,
    actions: {
      handleToggleLike,
      handleToggleCompare,
    },
  };
};
