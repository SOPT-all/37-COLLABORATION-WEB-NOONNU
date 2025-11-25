import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { FontItemType } from '@/shared/types/font';

import CompareFloatingButton from '../compare-floating-button/compare-floating-button';
import DeleteButton from '../floating-contents/delete-floating-button/delete-button';
import FontListBox from '../floating-contents/font-list-box/font-list-box';
import * as styles from './floating-button.css';

interface FloatingButtonProps {
  selectedFonts: FontItemType[];
  onDeleteFont: (id: number) => void;
  onDeleteAll: () => void;
}

const FloatingButton = ({
  selectedFonts,
  onDeleteFont,
  onDeleteAll,
}: FloatingButtonProps) => {
  const navigate = useNavigate();
  const [isList, setIsList] = useState(false);

  const handleHoverStart = () => setIsList(true);
  const handleHoverEnd = () => setIsList(false);

  const hasFonts = selectedFonts.length > 0;

  const handleCompareClick = () => {
    navigate('/storage', { state: { fonts: selectedFonts } });
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {isList && hasFonts && (
        <div className={styles.popupContainer}>
          <DeleteButton onClick={onDeleteAll} />
          <FontListBox fonts={selectedFonts} onDeleteFont={onDeleteFont} />
        </div>
      )}

      <CompareFloatingButton
        count={selectedFonts.length}
        onClick={handleCompareClick}
      />
    </div>
  );
};

export default memo(FloatingButton);
