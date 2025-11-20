import * as styles from './chip-section.css';

interface AllowedRangeChipProps {
  isSelected?: boolean;
  onClick?: () => void;
  label?: string;
}

const AllowedRangeChip = ({
  isSelected = false,
  onClick,
  label = '허용범위',
}: AllowedRangeChipProps) => {
  return (
    <button
      type='button'
      className={styles.chip({ selected: isSelected })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AllowedRangeChip;
