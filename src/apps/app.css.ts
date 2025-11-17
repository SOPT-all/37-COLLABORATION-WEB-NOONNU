import { style } from "@vanilla-extract/css";
import { themeVars } from "../shared/styles/theme.css";

export const display36b = style({
  ...themeVars.fontStyles.display_36b,
  backgroundColor: themeVars.color.primary,
});

export const display20r = style({
  ...themeVars.fontStyles.display_20r,
  backgroundColor: themeVars.color.primary_dark_01,
});
export const header16m = style({
  ...themeVars.fontStyles.header_16m,
  backgroundColor: themeVars.color.primary_dark_02,
});

export const title28sb = style({
  ...themeVars.fontStyles.title_28sb,
  backgroundColor: themeVars.color.negative,
});
export const body20sb = style({
  ...themeVars.fontStyles.body_20sb,
  backgroundColor: themeVars.color.gray_01,
});
export const body18sb = style({
  ...themeVars.fontStyles.body_18sb,
  backgroundColor: themeVars.color.gray_02,
});
export const body16sb = style({
  ...themeVars.fontStyles.body_16sb,
  backgroundColor: themeVars.color.gray_03,
});
export const body16m = style({
  ...themeVars.fontStyles.body_16m,
  backgroundColor: themeVars.color.gray_04,
});
export const body14m = style({
  ...themeVars.fontStyles.body_14m,
  backgroundColor: themeVars.color.gray_05,
});
export const body14r = style({
  ...themeVars.fontStyles.body_14r,
  backgroundColor: themeVars.color.black,
  color: themeVars.color.white,
});
