import { ArrowRightLineMdIcon } from '@/shared/icons';

import * as styles from './floating-button.css';

interface FloatingButtonProps {
  count: number;
  onClick?: () => void;
  handleHoverStart?: () => void;
  handleHoverEnd?: () => void;
}

const FloatingButton = ({
  count,
  onClick,
  handleHoverStart,
  handleHoverEnd,
}: FloatingButtonProps) => {
  const isEmpty = count === 0;

  if (isEmpty) {
    return (
      <button className={styles.emptyButton} disabled>
        폰트 탐색 중~
      </button>
    );
  }

  return (
    <button
      className={styles.compareButton}
      onClick={onClick}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
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

export default FloatingButton;
