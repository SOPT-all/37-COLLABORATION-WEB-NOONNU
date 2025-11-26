import { useCallback, useMemo, useState } from 'react';

import { useGetFonts } from '@/shared/apis/domain/font';
import { usePostCompare } from '@/shared/apis/domain/user-font';
import CardView from '@/shared/components/card-view/card-view';
import EmptyFont from '@/shared/components/empty-font/empty-font';
import ListView from '@/shared/components/list-view/list-view';
import SidePanel from '@/shared/components/side-panel/side-panel';
import {
  INITIAL_FILTERS,
  type FilterKey,
  type Filters,
} from '@/shared/constants/filter-keys';
import type { FontItemType } from '@/shared/types/font';
import type { SortType } from '@/shared/types/drop-down';
import { type LayoutToggleType, TOGGLE } from '@/shared/types/layout-toggle';
import { convertFiltersToApiParams } from '@/shared/utils/filter-mapper';
import { mapFontResponseToFontItem } from '@/shared/utils/font-mapper';
import { convertSortToApiParam } from '@/shared/utils/sort-mapper';
import Banner from '@/widgets/free-font/components/banner/banner';
import FloatingButton from '@/widgets/free-font/components/floating-button/floating-button';
import FontToolBar from '@/widgets/free-font/components/font-toolbar/font-toolbar';
import TopButton from '@/widgets/free-font/components/top-button/top-button';
import { useFontSelection } from '@/widgets/free-font/hooks/use-font-selection';

import * as styles from './free-font.css';

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const [previewText, setPreviewText] = useState('');
  const [layout, setLayout] = useState<LayoutToggleType>(TOGGLE.GRID);
  const [sort, setSort] = useState<SortType>('인기순');
  const [filters, setFilters] = useState<Filters>({ ...INITIAL_FILTERS });

  const apiParams = useMemo(() => {
    const filterParams = convertFiltersToApiParams(filters);
    return {
      sortBy: convertSortToApiParam(sort),
      ...filterParams,
    };
  }, [sort, filters]);

  const { data: fontsData, isLoading } = useGetFonts(apiParams);

  const fonts: FontItemType[] = useMemo(() => {
    if (!fontsData?.result?.fonts) {
      return [];
    }
    return fontsData.result.fonts.map(mapFontResponseToFontItem);
  }, [fontsData]);
  const { selectedFonts, toggleFont, deleteFont, clearFonts, isSelected } =
    useFontSelection();

  const { mutate: changeCompareState } = usePostCompare();

  const handleToggleCompare = (
    isCompared: boolean,
    font: FontItemType,
    fontId: number,
  ) => {
    changeCompareState({
      fontId,
      request: { isCompared: !isCompared },
    });
    toggleFont(font);
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
                  isCompared={isSelected(font.id)}
                  onToggleCompare={() =>
                    handleToggleCompare(isSelected(font.id), font, font.id)
                  }
                  onToggleLike={() => {}}
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
                  onToggleLike={() => {}}
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
