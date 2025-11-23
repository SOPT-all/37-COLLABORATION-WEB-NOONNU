import { fontItem } from '@shared/mocks/font-item';

import FontList from './components/font-list/font-list';
import * as styles from './floating-font-list-box.css';

const FloatingFontListBox = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {fontItem.map((item) => {
          return (
            <div key={item.id} className={styles.listContainer}>
              <FontList
                fontName={item.name}
                fontMetadata={item.fontMetadata}
                onDelete={() => {}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingFontListBox;
