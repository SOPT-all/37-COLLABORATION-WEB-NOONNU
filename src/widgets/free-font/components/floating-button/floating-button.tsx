import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CompareFloatingButton from '../compare-floating-button/compare-floating-button';
import DeleteButton from '../floating-contents/delete-floating-button/delete-button';
import FontListBox from '../floating-contents/font-list-box/font-list-box';
import * as styles from './floating-button.css';
import type { FontItemType } from '@/shared/types/font';

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
  const [isListVisible, setIsListVisible] = useState(false);

  const hasFonts = selectedFonts.length > 0;

  const handleCompareClick = () => {
    navigate('/storage', { state: { fonts: selectedFonts } });
  };

  const handleHoverStart = () => setIsListVisible(true);
  const handleHoverEnd = () => setIsListVisible(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {isListVisible && hasFonts && (
        <>
          <DeleteButton onClick={onDeleteAll} />
          <FontListBox fonts={selectedFonts} onDeleteFont={onDeleteFont} />
        </>
      )}

      <CompareFloatingButton
        count={selectedFonts.length}
        onClick={handleCompareClick}
      />
    </div>
  );
};

export default memo(FloatingButton);
