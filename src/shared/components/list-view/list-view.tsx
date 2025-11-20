import { useState } from 'react';

import {
  AddFilledIcon,
  AddLineIcon,
  ArrowRightMdIcon,
  StarColorIcon,
  StarFillIcon,
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

const ListView = ({
  name,
  company,
  weightNum,
  sampleText,
  isAdded: initialIsAdded,
  isLiked: initialIsLiked,
}: FontData) => {
  const [isAdded, setIsAdded] = useState(initialIsAdded);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const handleToggleAdd = () => {
    setIsAdded((prev) => !prev);
  };

  const handleToggleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <div className={styles.listViewContainer}>
        <div className={styles.listTitleContainer}>
          <div className={styles.fontInfoContainer}>
            <p className={styles.fontName}>{name}</p>
            <p className={styles.fontCompany}>{company}</p>
            <ArrowRightMdIcon
              width={24}
              height={24}
              className={styles.arrowIcon}
            />
          </div>
          <div className={styles.userActionContainer}>
            <p className={styles.fontWeightNum}>{weightNum}가지 굵기</p>
            <div className={styles.actionButtonContainer}>
              <button type='button' onClick={handleToggleAdd}>
                {isAdded ? (
                  <AddFilledIcon width={24} height={24} />
                ) : (
                  <AddLineIcon width={24} height={24} />
                )}
              </button>
              <button type='button' onClick={handleToggleLiked}>
                {isLiked ? (
                  <StarColorIcon width={24} height={24} />
                ) : (
                  <StarFillIcon width={24} height={24} />
                )}
              </button>
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
