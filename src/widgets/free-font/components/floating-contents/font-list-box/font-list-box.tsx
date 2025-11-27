import { memo } from 'react';

import type { CompareFontPreviewType } from '@/shared/apis/types/user-font';
import FontList from '../font-list/font-list';
import * as styles from './font-list-box.css';

interface FontListBoxProps {
  fonts: CompareFontPreviewType[];
  onDeleteFont: (id: number) => void;
}

const FontListBox = ({ fonts, onDeleteFont }: FontListBoxProps) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {fonts.map((item) => {
          return (
            <div key={item.id} className={styles.listContainer}>
              <FontList
                id={item.id}
                fontName={item.name}
                fontMetadata={item.fontMetadata}
                onDelete={onDeleteFont}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(FontListBox);
