import { type ChangeEvent } from 'react';
import * as styles from './slider.css';

interface SliderProps {
  label: string;
  valueNumber: number;
  valueUnit: string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const Slider = ({
  label,
  valueNumber,
  valueUnit,
  onChange,
  min,
  max,
}: SliderProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <label className={styles.sliderContainer}>
        <input
          className={styles.slider}
          id='slider_handle'
          type='range'
          min={min}
          max={max}
          value={valueNumber}
          onChange={handleChange}
        />
        <span className={styles.value} id='value'>
          {valueNumber}
          {valueUnit}
        </span>
      </label>
    </div>
  );
};

export default Slider;
