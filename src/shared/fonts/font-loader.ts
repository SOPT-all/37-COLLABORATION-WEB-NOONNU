import type { FontMetadataType } from '@shared/types/font';

const loadedFontFamilies = new Set<string>();

export const loadFont = async (meta: FontMetadataType) => {
  if (loadedFontFamilies.has(meta.fontFamily)) {
    return;
  }

  const fontFace = new FontFace(meta.fontFamily, `url(${meta.fontSource})`, {
    weight: meta.fontWeight,
    display: meta.fontDisplay,
    style: 'normal',
  });

  await fontFace.load();
  document.fonts.add(fontFace);
  loadedFontFamilies.add(meta.fontFamily);
};
