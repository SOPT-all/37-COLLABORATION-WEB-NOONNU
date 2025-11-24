import type { ChangeEventHandler } from 'react';

import { PenIcon, SearchIcon, XIcon } from '@/shared/icons';

import * as styles from './input-field.css';

type InputFieldVariant = 'write' | 'search';

interface InputFieldProps {
  value: string;
  onChange: (nextValue: string) => void;
  placeholder: string;
  variant: InputFieldVariant;
}

const InputField = ({
  value,
  onChange,
  placeholder,
  variant,
}: InputFieldProps) => {
  const hasInputValue = value.length > 0;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    if (!hasInputValue) {
      return;
    }
    onChange('');
  };

  const iconElement = variant === 'write' ? <PenIcon /> : <SearchIcon />;

  return (
    <div className={styles.inputFieldContainer()}>
      <input
        type='text'
        value={value}
        className={styles.inputFieldInput}
        placeholder={placeholder}
        onChange={handleInputChange}
      />

      <button type='button' onClick={handleClear}>
        {hasInputValue ? <XIcon /> : iconElement}
      </button>
    </div>
  );
};

export default InputField;
