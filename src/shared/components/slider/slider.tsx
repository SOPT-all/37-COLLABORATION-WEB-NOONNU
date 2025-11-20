import * as styles from './slider.css';

interface SliderProps {
  label: string;
  value: string;
}

const Slider = ({ label, value }: SliderProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <label className={styles.sliderContainer}>
        <input
          className={styles.slider}
          type='range'
          min='0'
          max='100'
          defaultValue='20'
        />
        <span className={styles.value}>{value}</span>
      </label>
    </div>
  );
};

export default Slider;
