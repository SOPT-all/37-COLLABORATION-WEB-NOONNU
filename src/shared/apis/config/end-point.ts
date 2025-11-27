export const END_POINT = {
  COMPARE_STATE_CHANGE: (fontId: number) => `user/fonts/${fontId}/compare`,
  COMPARE_FONT_BUTTON: `user/compared-fonts/preview`,
  LIKE_STATE_CHANGE: (fontId: number) => `user/fonts/${fontId}/like`,
  COMPARE_FONT: 'user/compared-fonts',
  GET_FONTS: 'fonts',
  // COMPARE_FONT: 'user/compared-fonts
  // LIKE_FONT: ...
};
