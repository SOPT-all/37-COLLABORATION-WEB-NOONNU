import * as styles from './filter-section.css';

interface FilterSectionProps {
  isTitleSelected?: boolean;
  isScopeSelected?: boolean;
  onTitleClick?: () => void;
  onScopeClick?: () => void;
}

const FilterSection = ({
  isTitleSelected = false,
  isScopeSelected = false,
  onTitleClick,
  onScopeClick,
}: FilterSectionProps) => {
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

export default FilterSection;
