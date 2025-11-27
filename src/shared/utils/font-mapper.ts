import type { FontResponse } from '@/shared/apis/types/font';
import type { FontItemType } from '@/shared/types/font';

export const mapFontResponseToFontItem = (font: FontResponse): FontItemType => {
  return {
    id: font.id,
    name: font.name,
    producer: font.producer,
    thicknessNum: font.thicknessNum,
    phrase: font.phrase,
    isLiked: font.isLiked,
    isCompared: font.isCompared,
    fontMetadata: {
      fontFamily: font.fontMetadata.fontFamily,
      fontSource: font.fontMetadata.fontSource,
      fontWeight: font.fontMetadata.fontWeight,
      fontDisplay: font.fontMetadata.fontDisplay,
    },
  };
};
