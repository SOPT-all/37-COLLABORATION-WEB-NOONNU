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
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontFamily?: '폰트패밀리';
  fontSource?: 'https://~~~';
  fontWeight?: 'wide';
}

const ListView = ({
  name,
  producer,
  thicknessNum,
  phrase,
  isCompared: initialisCompared,
  isLiked: initialIsLiked,
}: FontData) => {
  const [isCompared, setisCompared] = useState(initialisCompared);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const handleToggleAdd = () => {
    setisCompared((prev) => !prev);
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
            <p className={styles.fontProducer}>{producer}</p>
            <ArrowRightMdIcon
              width={24}
              height={24}
              className={styles.arrowIcon}
            />
          </div>
          <div className={styles.userActionContainer}>
            <p className={styles.fontThicknessNum}>{thicknessNum}가지 굵기</p>
            <div className={styles.actionButtonContainer}>
              <button
                type='button'
                onClick={handleToggleAdd}
                aria-label='비교하기 목록에 추가'
              >
                {isCompared ? (
                  <AddFilledIcon width={24} height={24} />
                ) : (
                  <AddLineIcon width={24} height={24} />
                )}
              </button>
              <button
                type='button'
                onClick={handleToggleLiked}
                aria-label='찜 목록에 추가'
              >
                {isLiked ? (
                  <StarColorIcon width={24} height={24} />
                ) : (
                  <StarFillIcon width={24} height={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.phraseContainer}>
          <p className={styles.phrase}>{phrase}</p>
        </div>
      </div>
    </>
  );
};

export default ListView;
