import { useState, useCallback } from 'react';
import Slider from '@/shared/components/slider/slider';
import Accordion from '@/shared/components/accordion/accordion';
import InputField from '@/shared/components/input-field/input-field';
import { LayoutToggle } from '@/shared/components/layout-toggle/layout-toggle';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import FloatingButton from '@/widgets/free-font/components/floating-button/floating-button';
import { type FontItemType } from '@/shared/types/font';
import * as styles from './free-font.css';

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const [placeholderText, setPlaceholderText] = useState('');
  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);

  const [selectedFonts, setSelectedFonts] = useState<FontItemType[]>([]);

  const handleSizeChange = useCallback(
    (value: number) => setFontSize(value),
    [],
  );
  const handleLayoutChange = (nextLayout: LayoutToggleType) => {
    if (layout !== nextLayout) setLayout(nextLayout);
  };
  const handleInputChange = (text: string) => setPlaceholderText(text);

  const handleDeleteFont = useCallback((id: number) => {
    setSelectedFonts((prev) => prev.filter((font) => font.id !== id));
  }, []);

  const handleDeleteAll = useCallback(() => {
    setSelectedFonts([]);
  }, []);

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
              value={placeholderText}
              onChange={handleInputChange}
              placeholder='폰트 이름 및 제작자로 검색'
              variant='search'
            />
            <LayoutToggle value={layout} onClick={handleLayoutChange} />
          </div>
          <div className={styles.viewSection}>ㅌㄴㅈ</div>
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
