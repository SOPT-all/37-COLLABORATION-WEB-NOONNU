import 'react-toastify/dist/ReactToastify.css';
import * as styles from './toast.css';
import { XIcon } from '@/shared/icons';

const Toast = () => (
  <div className={styles.container}>
    <span className={styles.message}>
      폰트이름 폰트가 비교목록에 추가되었습니다.
    </span>
    <div className={styles.xIcon}>
      <XIcon />
    </div>
  </div>
);

export default Toast;
