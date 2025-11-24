import type { ChangeEventHandler, ReactNode } from 'react';

import { PenIcon, XIcon } from '@/shared/icons';

import * as styles from './input-field.css';

const INPUT_FIELD_PLACEHOLDER = '문구 적고 폰트 미리보기';

export interface InputFieldProps {
  value: string;
  onChange: (nextValue: string) => void;
  placeholder?: string;
  idleIcon?: ReactNode;
}

export const InputField = ({
  value,
  onChange,
  placeholder,
  idleIcon,
}: InputFieldProps) => {
  const hasInputValue = value.length > 0;
  const placeholderText = placeholder ?? INPUT_FIELD_PLACEHOLDER;
  const idleIconElement = idleIcon ?? <PenIcon />;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    if (!hasInputValue) {
      return;
    }
    onChange('');
  };

  return (
    <div className={styles.inputFieldContainer()}>
      <input
        type='text'
        value={value}
        className={styles.inputFieldInput}
        placeholder={placeholderText}
        onChange={handleInputChange}
      />

      <button
        type='button'
        className={styles.inputFieldIcon}
        onClick={handleClear}
      >
        {hasInputValue ? <XIcon /> : idleIconElement}
      </button>
    </div>
  );
};
