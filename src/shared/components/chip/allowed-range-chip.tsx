import * as styles from './chip.css';

interface AllowedRangeChipProps {
  isSelected: boolean;
  onClick?: () => void;
  label: string;
}

const AllowedRangeChip = ({
  isSelected,
  onClick,
  label,
}: AllowedRangeChipProps) => {
  return (
    <button
      type='button'
      className={styles.chip({ isSelected })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AllowedRangeChip;
