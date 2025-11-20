import {
  AddFilledIcon,
  AddLineIcon,
  ArrowRightMdIcon,
  StarFillIcon,
  StarIcon,
} from '@/shared/icons';

import * as styles from './list-view.css';

interface FontData {
  id: number;
  name: string;
  company: string;
  weightNum: number;
  sampleText: string;
  isLiked: boolean;
  isAdded: boolean;
}

const ListView = ({ name, company, weightNum, sampleText }: FontData) => {
  return (
    <>
      <div className={styles.listViewContainer}>
        <div className={styles.listTitleContainer}>
          <div className={styles.fontInfoContainer}>
            <p className={styles.fontName}>{name}</p>
            <p className={styles.fontCompany}>{company}</p>
            <ArrowRightMdIcon width={24} height={24} />
          </div>
          <div className={styles.userActionContainer}>
            <p className={styles.fontWeightNum}>{weightNum}가지 굵기</p>
            <div className={styles.actionButtonContainer}>
              <AddLineIcon width={24} height={24} />
              <StarFillIcon width={24} height={24} />
            </div>
          </div>
        </div>

        <div className={styles.sampleTextContainer}>
          <p className={styles.sampleText}>{sampleText}</p>
        </div>
      </div>
    </>
  );
};

export default ListView;
