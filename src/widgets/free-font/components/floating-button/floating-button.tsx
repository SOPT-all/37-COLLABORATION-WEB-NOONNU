import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routePath } from '@/router/path';
import {
  useCompareResetAll,
  useGetComparePreview,
} from '@/shared/apis/domain/user-font';

import CompareFloatingButton from '../compare-floating-button/compare-floating-button';
import DeleteButton from '../floating-contents/delete-floating-button/delete-button';
import FontListBox from '../floating-contents/font-list-box/font-list-box';
import * as styles from './floating-button.css';

interface FloatingButtonProps {
  onDeleteFont: (id: number, name: string) => void;
}

const FloatingButton = ({ onDeleteFont }: FloatingButtonProps) => {
  const navigate = useNavigate();
  const [isList, setIsList] = useState(false);
  const { data } = useGetComparePreview();
  const { mutate: deleteAllCompare } = useCompareResetAll();

  const selectedFonts = data || [];

  const handleHoverStart = () => setIsList(true);
  const handleHoverEnd = () => setIsList(false);

  const hasFonts = selectedFonts.length > 0;

  const handleCompareClick = () => {
    navigate(routePath.STORAGE, { state: { fonts: selectedFonts } });
  };

  const onDeleteAll = () => {
    const fontIds = selectedFonts.map((font) => font.id);
    if (fontIds.length === 0) {
      return;
    }
    const shouldDelete = window.confirm(
      '폰트 비교에 담긴 모든 폰트를 삭제할까요?',
    );
    if (!shouldDelete) {
      return;
    }
    deleteAllCompare(fontIds);
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
