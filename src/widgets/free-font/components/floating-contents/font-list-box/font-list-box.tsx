import { fontItem as initialData } from '@shared/mocks/font-item';
import { useCallback, useState } from 'react';

import FontList from '../font-list/font-list';
import * as styles from './font-list-box.css';

const FontListBox = () => {
  const [fonts, setFonts] = useState(initialData);

  const handleDeleteFont = useCallback((id: number) => {
    setFonts((prevFonts) => prevFonts.filter((item) => item.id !== id));
  }, []);

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
                onDelete={handleDeleteFont}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FontListBox;
