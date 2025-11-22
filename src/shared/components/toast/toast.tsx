import * as styles from './toast.css';
import { XIcon } from '@/shared/icons';
import { CharacterToastIcon } from '@/shared/icons';
export interface ToastProps {
  fontName?: string;
  status?: 'added' | 'removed';
}

const Toast = ({ fontName, status }: ToastProps) => {
  let statusMessage = '';

  if (status === 'added') {
    statusMessage = '추가되었습니다.';
  } else if (status === 'removed') {
    statusMessage = '삭제되었습니다.';
  }

  return (
    <div className={styles.container}>
      <CharacterToastIcon />
      <span className={styles.message}>
        {fontName} 폰트가 찜목록에서 {statusMessage}
      </span>
      <div className={styles.xIcon}>
        <XIcon />
      </div>
    </div>
  );
};

export default Toast;
