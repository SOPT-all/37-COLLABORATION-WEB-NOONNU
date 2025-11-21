import { ArrowRightLineMdIcon } from '@/shared/icons';

import * as styles from './compare-floating-button.css';

interface CompareFloatingButtonProps {
  count: number;
}

const CompareFloatingButton = ({ count }: CompareFloatingButtonProps) => {
  return (
    <button className={styles.compareBtnStyle}>
      <span className={styles.textContainer}>
        <span key={count} className={styles.animateText}>
          {count}개
        </span>
      </span>
      <span>비교하기</span>
      <ArrowRightLineMdIcon
        width={24}
        height={24}
        className={styles.arrowIconStyle}
      />
    </button>
  );
};

export default CompareFloatingButton;
