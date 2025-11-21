import { ArrowRightLineMdIcon } from '@/shared/icons';

import * as styles from './compare-floating-button.css';

const CompareFloatingButton = () => {
  return (
    <button className={styles.compareBtnStyle}>
      <span>3개</span>
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
