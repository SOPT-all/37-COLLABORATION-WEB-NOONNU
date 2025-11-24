import { ArrowRightLineSmIcon } from '../../icons';
import * as styles from './free-font-button.css';

interface FreeFontButtonProps {
  onClick: () => void;
}

const FreeFontButton = ({ onClick }: FreeFontButtonProps) => {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      <span className={styles.text}>무료 폰트</span>
      <ArrowRightLineSmIcon className={styles.icon} />
    </button>
  );
};

export default FreeFontButton;
