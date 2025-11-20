import * as styles from './chip-section.css';

interface ChipSectionProps {
  isTitleSelected?: boolean;
  isScopeSelected?: boolean;
  onTitleClick?: () => void;
  onScopeClick?: () => void;
}

const ChipSection = ({
  isTitleSelected = false,
  isScopeSelected = false,
  onTitleClick,
  onScopeClick,
}: ChipSectionProps) => {
  return (
    <>
      <button
        type='button'
        className={`${styles.chipTitle} ${isTitleSelected ? styles.chipSelected : ''}`}
        onClick={onTitleClick}
      >
        제목용
      </button>
      <button
        type='button'
        className={`${styles.chip} ${isScopeSelected ? styles.chipSelected : ''}`}
        onClick={onScopeClick}
      >
        허용범위
      </button>
    </>
  );
};

export default ChipSection;
