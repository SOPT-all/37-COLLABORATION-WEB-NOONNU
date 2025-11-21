import * as styles from './font-list.css';
import { DeleteIcon } from '@/shared/icons';

const FontList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fontStyle}>프리텐다드</div>
      <DeleteIcon className={styles.deleteBtn} />
    </div>
  );
};

export default FontList;
