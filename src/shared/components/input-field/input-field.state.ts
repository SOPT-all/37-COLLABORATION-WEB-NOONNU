export const INPUT_FIELD_STATE = {
  DEFAULT: 'default',
  FOCUSED: 'focused',
  TYPING: 'typing',
} as const;

export type InputFieldState =
  (typeof INPUT_FIELD_STATE)[keyof typeof INPUT_FIELD_STATE];

export const getInputFieldState = (
  value: string,
  isFocused: boolean,
): InputFieldState => {
  if (value.length > 0) {
    return INPUT_FIELD_STATE.TYPING;
  }

  if (isFocused) {
    return INPUT_FIELD_STATE.FOCUSED;
  }

  return INPUT_FIELD_STATE.DEFAULT;
};
