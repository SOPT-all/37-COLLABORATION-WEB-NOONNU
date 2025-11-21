import { ArrowRightLineMdIcon } from '@/shared/icons';

import * as styles from './compare-floating-button.css';

interface CompareFloatingButtonProps {
  count: number;
  onClick?: () => void;
}

const CompareFloatingButton = ({
  count,
  onClick,
}: CompareFloatingButtonProps) => {
  if (count === 0) {
    return (
      <button className={styles.emptyButton} disabled>
        폰트 탐색 중~
      </button>
    );
  }

  return (
    <button className={styles.compareButton} onClick={onClick}>
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
