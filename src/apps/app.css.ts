import { style } from "@vanilla-extract/css";
import { themeVars } from "../shared/styles/theme.css";

export const text = style({
  ...themeVars.fontStyles.display_36b,
  color: themeVars.color.primary,
});
