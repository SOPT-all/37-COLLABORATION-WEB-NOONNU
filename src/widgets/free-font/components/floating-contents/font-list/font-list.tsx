import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useLoadFont } from '@/shared/hooks/use-load-font';
import { DeleteIcon } from '@/shared/icons';
import type { FontMetadataType } from '@/shared/types/font';

import * as styles from './font-list.css';

interface FontListProps {
  fontName: string;
  fontMetadata: FontMetadataType;
  onDelete: () => void;
}

const FontList = ({ fontName, fontMetadata, onDelete }: FontListProps) => {
  useLoadFont(fontMetadata);

  return (
    <div className={styles.container}>
      <div
        className={styles.fontStyle}
        style={assignInlineVars({
          [styles.fontFamilyVar]: fontMetadata.fontFamily,
          [styles.fontWeightVar]: fontMetadata.fontWeight,
        })}
      >
        {fontName}
      </div>
      <button
        className={styles.deleteBtn}
        onClick={onDelete}
        aria-label='찜목록에서 제외'
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default FontList;
