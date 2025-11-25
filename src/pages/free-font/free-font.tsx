import { useCallback, useState } from 'react';

import Accordion from '@/shared/components/accordion/accordion';
import CardView from '@/shared/components/card-view/card-view';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import FloatingButton from '@/widgets/free-font/components/floating-button/floating-button';
import FontToolBar from '@/widgets/free-font/components/font-toolbar/font-toolbar';
import * as styles from './free-font.css';
import ListView from '@/shared/components/list-view/list-view';
import { useFontSelection } from '@/widgets/free-font/hooks/use-font-selection';
import { fontItem } from '@/shared/mocks/font-item';

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const [previewText, setPreviewText] = useState('');
  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);
  const [fonts] = useState(fontItem);
  const { selectedFonts, toggleFont, deleteFont, clearFonts, isSelected } =
    useFontSelection();

  const handleSizeChange = useCallback(
    (value: number) => setFontSize(value),
    [],
  );
  const handleLayoutChange = (nextLayout: LayoutToggleType) => {
    if (layout !== nextLayout) {
      setLayout(nextLayout);
    }
  };
  const handleInputChange = (text: string) => setPreviewText(text);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <span className={styles.bannerSubtitle}>
          폰트 판매, 눈누가 도와드릴게요
        </span>
        <span className={styles.bannerTitle}>
          눈누마켓과 함께할
          <br />
          폰트 디자이너를 찾아요
        </span>
      </div>

      <div className={styles.article}>
        <Accordion>
          <Accordion.Container>
            <Accordion.Header subtitle='용도별' />
            <Accordion.Panel>
              <div>필터 콘텐츠</div>
            </Accordion.Panel>
          </Accordion.Container>
        </Accordion>

        <div className={styles.rightSection}>
          <FontToolBar
            fontSize={fontSize}
            previewText={previewText}
            layout={layout}
            onSizeChange={handleSizeChange}
            onInputChange={handleInputChange}
            onLayoutChange={handleLayoutChange}
          />

          <div>
            <div className={styles.cardSection}>
              {layout === TOGGLE.GRID &&
                fonts.map((font) => (
                  <CardView
                    key={font.id}
                    {...font}
                    globalPhrase={previewText}
                    isCompared={isSelected(font.id)}
                    onToggleCompare={() => toggleFont(font)}
                    onToggleLike={() => {}}
                  />
                ))}
            </div>

            <div className={styles.listSection}>
              {layout === TOGGLE.LIST &&
                fonts.map((font) => (
                  <ListView
                    key={font.id}
                    {...font}
                    globalPhrase={previewText}
                    isCompared={isSelected(font.id)}
                    onToggleCompare={() => toggleFont(font)}
                    onToggleLike={() => {}}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <FloatingButton
        selectedFonts={selectedFonts}
        onDeleteFont={deleteFont}
        onDeleteAll={clearFonts}
      />
    </div>
  );
};

export default FreeFont;
