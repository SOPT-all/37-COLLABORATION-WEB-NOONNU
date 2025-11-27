import { useCallback, useState } from 'react';

import { usePostCompare, usePostLike } from '@/shared/apis/domain/user-font';
import { queryKey } from '@/shared/apis/keys/query-key';
import { queryClient } from '@/shared/apis/query-client';
import CardView from '@/shared/components/card-view/card-view';
import ListView from '@/shared/components/list-view/list-view';
import SidePanel from '@/shared/components/side-panel/side-panel';
import { fontItem } from '@/shared/mocks/font-item';
import type { FontItemType } from '@/shared/types/font';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import Banner from '@/widgets/free-font/components/banner/banner';
import FloatingButton from '@/widgets/free-font/components/floating-button/floating-button';
import FontToolBar from '@/widgets/free-font/components/font-toolbar/font-toolbar';
import TopButton from '@/widgets/free-font/components/top-button/top-button';
import { useFontSelection } from '@/widgets/free-font/hooks/use-font-selection';

import * as styles from './free-font.css';

const userId = 1;

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const [previewText, setPreviewText] = useState('');
  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);
  const [fonts] = useState(fontItem);
  const { selectedFonts, toggleFont, deleteFont, clearFonts, isSelected } =
    useFontSelection();

  const { mutate: changeCompareState } = usePostCompare();
  const { mutate: changeLikeState } = usePostLike();

  const handleToggleCompare = (
    isCompared: boolean,
    font: FontItemType,
    fontId: number,
  ) => {
    changeCompareState(
      {
        fontId,
        request: { isCompared: !isCompared },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_COMPARE, userId],
          });
          toggleFont(font);
        },
      },
    );
    toggleFont(font);
  };

  const handleToggleLike = (isLiked: boolean, fontId: number) => {
    changeLikeState({
      fontId,
      request: { isLiked: !isLiked },
    });
  };

  const handleSizeChange = useCallback(
    (value: number) => setFontSize(value),
    [],
  );

  const handleInputChange = useCallback((text: string) => {
    setPreviewText(text);
  }, []);

  const handleLayoutChange = (nextLayout: LayoutToggleType) => {
    if (layout !== nextLayout) {
      setLayout(nextLayout);
    }
  };

  return (
    <div className={styles.container}>
      <Banner />

      <div className={styles.article}>
        <SidePanel />

        <div className={styles.rightSection}>
          <FontToolBar
            fontSize={fontSize}
            previewText={previewText}
            layout={layout}
            onSizeChange={handleSizeChange}
            onInputChange={handleInputChange}
            onLayoutChange={handleLayoutChange}
          />

          {layout === TOGGLE.GRID ? (
            <div className={styles.cardSection}>
              {fonts.map((font) => (
                <CardView
                  key={font.id}
                  {...font}
                  globalPhrase={previewText}
                  isCompared={isSelected(font.id)}
                  onToggleCompare={() =>
                    handleToggleCompare(isSelected(font.id), font, font.id)
                  }
                  onToggleLike={() => handleToggleLike(font.isLiked, font.id)}
                />
              ))}
            </div>
          ) : (
            <div className={styles.listSection}>
              {fonts.map((font) => (
                <ListView
                  key={font.id}
                  {...font}
                  globalPhrase={previewText}
                  isCompared={isSelected(font.id)}
                  onToggleCompare={() =>
                    handleToggleCompare(isSelected(font.id), font, font.id)
                  }
                  onToggleLike={() => handleToggleLike(font.isLiked, font.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <TopButton />
      <FloatingButton
        selectedFonts={selectedFonts}
        onDeleteFont={deleteFont}
        onDeleteAll={clearFonts}
      />
    </div>
  );
};

export default FreeFont;
