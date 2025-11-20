import * as styles from './chip-section.css';
import titleIcon from '@/shared/assets/title.png';
interface TitleChipProps {
  isSelected?: boolean;
  onClick?: () => void;
  iconSrc: string;
  alt: string;
}

const TitleChip = ({
  isSelected = false,
  onClick,
  iconSrc = titleIcon,
  alt,
}: TitleChipProps) => {
  return (
    <button
      type='button'
      className={styles.chip({ selected: isSelected })}
      onClick={onClick}
    >
      <img className={styles.titleImage} src={iconSrc} alt={alt} />
    </button>
  );
};

export default TitleChip;
