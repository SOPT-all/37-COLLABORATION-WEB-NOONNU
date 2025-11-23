import type { ChangeEventHandler, FocusEventHandler } from 'react';

import { PenIcon, XIcon } from '../../icons';
import * as styles from './input-field.css';
import { INPUT_FIELD_STATE, type InputFieldState } from './input-field.state';

export interface InputFieldProps {
  value: string;
  visualState: InputFieldState;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFocus: FocusEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onClear: () => void;
}

export const InputField = ({
  value,
  visualState,
  onChange,
  onFocus,
  onBlur,
  onClear,
}: InputFieldProps) => {
  const isTyping = visualState === INPUT_FIELD_STATE.TYPING;
  const INPUT_FIELD_PLACEHOLDER = '문구 적고 폰트 미리보기';

  return (
    <div className={styles.inputFieldContainer[visualState]}>
      <input
        type='text'
        value={value}
        className={styles.baseInput}
        placeholder={INPUT_FIELD_PLACEHOLDER}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <button type='button' onClick={isTyping ? onClear : undefined}>
        {isTyping ? <XIcon /> : <PenIcon />}
      </button>
    </div>
  );
};
