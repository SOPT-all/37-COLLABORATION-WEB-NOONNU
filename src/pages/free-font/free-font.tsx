import { useCallback, useEffect, useState } from 'react';

import { usePostCompare, usePostLike } from '@/shared/apis/domain/user-font';
import { queryKey } from '@/shared/apis/keys/query-key';
import { queryClient } from '@/shared/apis/query-client';
import CardView from '@/shared/components/card-view/card-view';
import EmptyFont from '@/shared/components/empty-font/empty-font';
import ListView from '@/shared/components/list-view/list-view';
import SidePanel from '@/shared/components/side-panel/side-panel';
import {
  type FilterKey,
  type Filters,
  INITIAL_FILTERS,
} from '@/shared/constants/filter-keys';
import { useFilteredFonts } from '@/shared/hooks/use-filtered-fonts';
import type { SortType } from '@/shared/types/drop-down';
import type { FontItemType } from '@/shared/types/font';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import Banner from '@/widgets/free-font/components/banner/banner';
import FloatingButton from '@/widgets/free-font/components/floating-button/floating-button';
import FontToolBar from '@/widgets/free-font/components/font-toolbar/font-toolbar';
import TopButton from '@/widgets/free-font/components/top-button/top-button';
import { useFontSelection } from '@/widgets/free-font/hooks/use-font-selection';

import * as styles from './free-font.css';

const userId = 1;
const FONT_SIZE = 30;

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(FONT_SIZE);
  const [previewText, setPreviewText] = useState('');
  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);
  const [sort, setSort] = useState<SortType>('인기순');
  const [filters, setFilters] = useState<Filters>({ ...INITIAL_FILTERS });

  const { fonts, isLoading } = useFilteredFonts(filters, sort);
  const { toggleFont, isSelected } = useFontSelection();
  const { mutate: deleteCompare } = usePostCompare();

  useEffect(() => {
    if (fonts.length > 0) {
      fonts.forEach((font) => {
        if (font.isCompared && !isSelected(font.id)) {
          toggleFont(font);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fonts]);

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
            queryKey: [queryKey.GET_COMPARE_FONT_PREVIEW, userId],
          });
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_COMPARE, userId],
          });
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_FONTS],
          });
        },
      },
    );
    toggleFont(font);
  };

  const handleToggleLike = (isLiked: boolean, fontId: number) => {
    changeLikeState(
      {
        fontId,
        request: { isLiked: !isLiked },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_COMPARE_FONT_PREVIEW, userId],
          });
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_LIKED_FONTS, userId],
          });
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_FONTS],
          });
        },
      },
    );
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

  const handleSortChange = useCallback((nextSort: SortType) => {
    setSort(nextSort);
  }, []);

  const handleToggleFilter = useCallback((key: FilterKey) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({ ...INITIAL_FILTERS });
  }, []);

  const deleteFont = (fontId: number, fontName: string) => {
    const isDelete = window.confirm(`${fontName}을(를) 삭제할까요?`);
    if (!isDelete) {
      return;
    }
    deleteCompare(
      {
        fontId,
        request: { isCompared: false },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_COMPARE_FONT_PREVIEW, userId],
          });

          queryClient.invalidateQueries({
            queryKey: [queryKey.GET_FONTS],
          });
        },
      },
    );
  };

  return (
    <div className={styles.container}>
      <Banner />

      <div className={styles.article}>
        <SidePanel
          filters={filters}
          onToggleFilter={handleToggleFilter}
          onReset={handleResetFilters}
        />

        <div className={styles.rightSection}>
          <FontToolBar
            fontSize={fontSize}
            previewText={previewText}
            layout={layout}
            sort={sort}
            onSizeChange={handleSizeChange}
            onInputChange={handleInputChange}
            onLayoutChange={handleLayoutChange}
            onSortChange={handleSortChange}
          />

          {fonts.length === 0 && !isLoading ? (
            <EmptyFont />
          ) : layout === TOGGLE.GRID ? (
            <div className={styles.cardSection}>
              {fonts.map((font) => (
                <CardView
                  key={font.id}
                  {...font}
                  globalPhrase={previewText}
                  isCompared={font.isCompared}
                  isLiked={font.isLiked}
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
                  isCompared={font.isCompared}
                  isLiked={font.isLiked}
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
      <FloatingButton onDeleteFont={deleteFont} />
    </div>
  );
};

export default FreeFont;
