import { AddLineIcon, ArrowRightMdIcon, StarFillIcon } from '@/shared/icons';

import * as styles from './list-view.css';

const ListView = () => {
  return (
    <>
      <div className={styles.listViewContainer}>
        <div className={styles.listTitleContainer}>
          <div className={styles.fontInfoContainer}>
            <p className={styles.fontName}>폰트 이름</p>
            <p className={styles.fontCompany}>폰트 제작사</p>
            <ArrowRightMdIcon width={24} height={24} />
          </div>
          <div className={styles.userActionContainer}>
            <p className={styles.fontBold}>굵기</p>
            <div className={styles.actionButtonContainer}>
              <AddLineIcon width={24} height={24} />
              <StarFillIcon width={24} height={24} />
            </div>
          </div>
        </div>

        <div>
          <p>샘플 텍스트</p>
        </div>
      </div>
    </>
  );
};

export default ListView;
