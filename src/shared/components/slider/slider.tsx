import { type ChangeEvent } from 'react';

import * as styles from './slider.css';

interface SliderProps {
  label: string;
  value: number;
  unit: string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const Slider = ({ label, value, unit, onChange, min, max }: SliderProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <label className={styles.sliderContainer}>
        <input
          className={styles.slider}
          type='range'
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <span className={styles.value}>
          {value}
          {unit}
        </span>
      </label>
    </div>
  );
};

export default Slider;
