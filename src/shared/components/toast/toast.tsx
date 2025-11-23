import * as styles from './toast.css';
import { CharacterToastIcon } from '@/shared/icons';
import { XIcon } from '@/shared/icons';
import type { ToastProps } from '@/shared/types/toast';

const Toast = ({ fontName, status }: ToastProps) => {
  const statusMessage =
    status === 'added' ? '추가되었습니다.' : '삭제되었습니다.';

  return (
    <div className={styles.container}>
      <CharacterToastIcon className={styles.character} />
      <span className={styles.message}>
        {fontName} 폰트가 찜목록에서 {statusMessage}
      </span>
      <XIcon className={styles.xIcon} />
    </div>
  );
};

export default Toast;
