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
import type { FontMetadataType } from '@/shared/types/font';

import * as styles from './list-view.css';
interface ListViewProps {
  id: number;
  name: string;
  producer: string;
  thicknessNum: number;
  phrase: string;
  isLiked: boolean;
  isCompared: boolean;
  fontMetadata: FontMetadataType;
  globalPhrase: string;
  onToggleLike: (id: number, name: string, isCompared: boolean) => void;
  onToggleCompare: (id: number) => void;
}

const ListView = ({
  id,
  name,
  producer,
  thicknessNum,
  phrase,
  isCompared,
  isLiked,
  fontMetadata,
  globalPhrase,
  onToggleLike,
  onToggleCompare,
}: ListViewProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(globalPhrase);

  useLoadFont(fontMetadata);
  const fontStyleVars = assignInlineVars({
    [styles.fontFamilyVar]: fontMetadata.fontFamily,
    [styles.fontWeightVar]: fontMetadata.fontWeight,
  });

  const handlePhraseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentPhrase(e.target.value);
  };

  const displayPhrase = globalPhrase !== '' ? globalPhrase : currentPhrase;

  return (
    <article className={styles.listViewContainer}>
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
              aria-label='비교하기 목록에 추가'
              onClick={() => onToggleCompare(id)}
            >
              {isCompared ? (
                <AddFilledIcon width={24} height={24} />
              ) : (
                <AddLineIcon width={24} height={24} />
              )}
            </button>
            <button
              type='button'
              aria-label='찜 목록에 추가'
              onClick={() => onToggleLike(id, name, isCompared)}
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
          value={displayPhrase}
          onChange={handlePhraseChange}
          placeholder={phrase}
          className={styles.editInput}
          style={fontStyleVars}
          spellCheck={false}
        />
      </div>
    </article>
  );
};

export default ListView;
