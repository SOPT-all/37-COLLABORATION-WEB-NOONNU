import { useCallback, useState } from 'react';

import Accordion from '@/shared/components/accordion/accordion';
import CardView from '@/shared/components/card-view/card-view';
import InputField from '@/shared/components/input-field/input-field';
import { LayoutToggle } from '@/shared/components/layout-toggle/layout-toggle';
import Slider from '@/shared/components/slider/slider';
import { fontItem } from '@/shared/mocks/font-item';
import { type FontItemType } from '@/shared/types/font';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import FloatingButton from '@/widgets/free-font/components/floating-button/floating-button';

import * as styles from './free-font.css';

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const [previewText, setPreviewText] = useState('');
  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);
  const [fonts, setFonts] = useState<FontItemType[]>(fontItem);
  const [selectedFonts, setSelectedFonts] = useState<FontItemType[]>([]);

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

  const handleDeleteFont = useCallback((id: number) => {
    setSelectedFonts((prev) => prev.filter((font) => font.id !== id));

    setFonts((prev) =>
      prev.map((font) =>
        font.id === id ? { ...font, isCompared: false } : font,
      ),
    );
  }, []);

  const handleDeleteAll = useCallback(() => {
    setSelectedFonts([]);

    setFonts((prev) => prev.map((font) => ({ ...font, isCompared: false })));
  }, []);

  const handleToggleLike = () => {};

  const handleToggleCompare = (id: number) => {
    const targetFont = fonts.find((font) => font.id === id);
    if (!targetFont) {
      return;
    }

    const isAlreadySelected = selectedFonts.some((font) => font.id === id);

    if (isAlreadySelected) {
      setSelectedFonts((prev) => prev.filter((font) => font.id !== id));
    } else {
      setSelectedFonts((prev) => [...prev, targetFont]);
    }

    setFonts((prev) =>
      prev.map((font) =>
        font.id === id ? { ...font, isCompared: !font.isCompared } : font,
      ),
    );
  };

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
          <div className={styles.articleHeader}>
            <Slider
              label='크기'
              value={fontSize}
              unit='px'
              onChange={handleSizeChange}
            />
            <InputField
              value={previewText}
              onChange={handleInputChange}
              placeholder='폰트 이름 및 제작자로 검색'
              variant='search'
            />
            <LayoutToggle value={layout} onClick={handleLayoutChange} />
          </div>
          <div className={styles.viewSection}>
            {layout === TOGGLE.GRID && (
              <div>
                {fonts.map((font) => (
                  <CardView
                    id={font.id}
                    name={font.name}
                    producer={font.producer}
                    thicknessNum={font.thicknessNum}
                    phrase={font.phrase}
                    isLiked={font.isLiked}
                    isCompared={font.isCompared}
                    fontMetadata={font.fontMetadata}
                    globalPhrase={previewText}
                    onToggleLike={handleToggleLike}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            )}

            {layout === TOGGLE.LIST && (
              <div>📃 리스트 뷰 카드 리스트가 렌더링될 영역</div>
            )}

            {layout === TOGGLE.WORD && (
              <div>🔤 워드 뷰 카드 리스트가 렌더링될 영역</div>
            )}
          </div>
        </div>
      </div>
      <FloatingButton
        selectedFonts={selectedFonts}
        onDeleteFont={handleDeleteFont}
        onDeleteAll={handleDeleteAll}
      />
    </div>
  );
};

export default FreeFont;
