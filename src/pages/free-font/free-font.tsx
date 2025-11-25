import Slider from '@/shared/components/slider/slider';
import * as styles from './free-font.css';
import { useState, useCallback } from 'react';
import Accordion from '@/shared/components/accordion/accordion';
import InputField from '@/shared/components/input-field/input-field';
import { LayoutToggle } from '@/shared/components/layout-toggle/layout-toggle';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import { fontItem } from '@/shared/mocks/font-item';
import ListView from '@/shared/components/list-view/list-view';
import CardView from '@/shared/components/card-view/card-view';
import CompareFloatingButton from '@/widgets/free-font/components/compare-floating-button/compare-floating-button';

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const handleSizeChange = useCallback((value: number) => {
    setFontSize(value);
  }, []);

  const [placeholderText, setPlaceholderText] = useState('');

  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);

  const handleLayoutChange = (nextLayout: LayoutToggleType) => {
    if (layout === nextLayout) return;

    setLayout(nextLayout);
  };

  const handleInputChange = (text: string) => {
    setPlaceholderText(text);
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
              value={placeholderText}
              onChange={handleInputChange}
              placeholder='폰트 이름 및 제작자로 검색'
              variant='search'
            />
            <LayoutToggle value={layout} onClick={handleLayoutChange} />
          </div>
          <div className={styles.viewSection}>
            {layout === TOGGLE.GRID && (
              <div className={styles.cardSection}>
                {fontItem.map((ele) => (
                  <CardView
                    key={ele.id}
                    {...ele}
                    globalPhrase={placeholderText}
                    onToggleLike={() => {}}
                    onToggleCompare={() => {}}
                  />
                ))}
              </div>
            )}

            {layout === TOGGLE.LIST && (
              <div>
                {fontItem.map((ele) => (
                  <ListView
                    key={ele.id}
                    {...ele}
                    globalPhrase={placeholderText}
                    onToggleLike={() => {}}
                    onToggleCompare={() => {}}
                  />
                ))}
              </div>
            )}

            {layout === TOGGLE.WORD && (
              <div>🔤 워드 뷰 카드 리스트가 렌더링될 영역</div>
            )}
          </div>
          <CompareFloatingButton />
        </div>
      </div>
    </div>
  );
};

export default FreeFont;
