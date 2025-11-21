import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useState } from 'react';

import { useLoadFont } from '@/shared/hooks/use-load-font';
import {
  AddFilledIcon,
  AddLineIcon,
  ArrowRightMdIcon,
  StarColorIcon,
  StarFillIcon,
} from '@/shared/icons';

import * as styles from './list-view.css';

export interface FontMetadataType {
  fontFamily: string;
  fontSource: string;
  fontWeight: string;
  fontDisplay: FontDisplay;
}
interface ListViewProps {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadataType;
  onToggleLike?: (id: number, isLiked: boolean) => void;
  onToggleCompare?: (id: number, isCompared: boolean) => void;
}

const ListView = ({
  id,
  name,
  producer,
  thicknessNum,
  phrase,
  isCompared: initialisCompared,
  isLiked: initialIsLiked,
  fontMetadata,
  onToggleLike,
  onToggleCompare,
}: ListViewProps) => {
  const [isCompared, setIsCompared] = useState(initialisCompared);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const [currentPhrase, setCurrentPhrase] = useState('');

  useLoadFont(fontMetadata);
  const fontStyleVars = assignInlineVars({
    [styles.fontFamilyVar]: fontMetadata.fontFamily,
    [styles.fontWeightVar]: fontMetadata.fontWeight,
  });

  const handleToggleAdd = () => {
    const state = !isCompared;
    setIsCompared(state);
    onToggleCompare?.(id, state);
  };

  const handleToggleLiked = () => {
    const state = !isLiked;
    setIsLiked(state);
    onToggleLike?.(id, state);
  };

  const handlePhraseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPhrase(e.target.value);
  };

  return (
    <div className={styles.listViewContainer}>
      <div className={styles.listTitleContainer}>
        <div className={styles.fontInfoContainer}>
          <p className={styles.fontName} style={fontStyleVars}>
            {name}
          </p>
          <p className={styles.fontProducer} style={fontStyleVars}>
            {producer}
          </p>
          <ArrowRightMdIcon
            width={24}
            height={24}
            className={styles.arrowIcon}
          />
        </div>
        <div className={styles.userActionContainer}>
          <p className={styles.fontThicknessNum} style={fontStyleVars}>
            {thicknessNum}가지 굵기
          </p>
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
        <textarea
          value={currentPhrase}
          onChange={handlePhraseChange}
          placeholder={phrase}
          className={styles.editInput}
          style={fontStyleVars}
        />
      </div>
    </div>
  );
};

export default ListView;
