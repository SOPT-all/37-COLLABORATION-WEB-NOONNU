import * as styles from './font-list.css';
import { DeleteIcon } from '@/shared/icons';

interface FontListProps {
  fontName: string;
  onDelete: () => void;
}

const FontList = ({ fontName, onDelete }: FontListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.fontStyle}>{fontName}</div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default FontList;
