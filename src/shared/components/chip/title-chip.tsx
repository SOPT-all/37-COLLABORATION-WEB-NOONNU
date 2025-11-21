import * as styles from './chip.css';

interface TitleChipProps {
  isSelected: boolean;
  onClick?: () => void;
  iconSrc: string;
  alt: string;
}

const TitleChip = ({ isSelected, onClick, iconSrc, alt }: TitleChipProps) => {
  return (
    <button
      type='button'
      className={styles.chip({ isSelected })}
      onClick={onClick}
    >
      <img className={styles.titleImage} src={iconSrc} alt={alt} />
    </button>
  );
};

export default TitleChip;
