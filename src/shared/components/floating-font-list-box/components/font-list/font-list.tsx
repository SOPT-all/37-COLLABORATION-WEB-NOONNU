import * as styles from './font-list.css';
import { DeleteIcon } from '@/shared/icons';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useLoadFont } from '@/shared/hooks/use-load-font';
import type { FontMetadataType } from '@/shared/types/font';

interface FontListProps {
  fontName: string;
  fontMetadata: FontMetadataType;
  onDelete: () => void;
}

const FontList = ({ fontName, fontMetadata, onDelete }: FontListProps) => {
  if (!fontMetadata) {
    return null;
  }

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
      <button className={styles.deleteBtn} onClick={onDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default FontList;
