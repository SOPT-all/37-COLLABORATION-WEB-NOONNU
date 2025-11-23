import { DeleteIcon } from '@/shared/icons';

import * as styles from './src/shared/components/floating-font-list-box/font-list.css';

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
