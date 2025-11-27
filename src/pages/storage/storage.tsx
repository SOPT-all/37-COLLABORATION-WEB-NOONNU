import { useCallback, useState } from 'react';

import {
  useGetCompare,
  usePostCompare,
  usePostLike,
} from '@/shared/apis/domain/user-font';
import {
  type FilterKey,
  type Filters,
  INITIAL_FILTERS,
} from '@/shared/constants/filter-keys';
import {
  DeleteButtonBar,
  FontCardView,
  FontListView,
  FontToolBar,
  FreeFontButton,
  SidePanel,
  Tab,
} from '@/widgets/storage/components/index.ts';
import { useStorage } from '@/widgets/storage/hooks/use-storage';

import * as styles from './storage.css';

const Storage = () => {
  const { uiState, actionState, fonts, displayFonts, actions } = useStorage();
  const { mutate: changeCompareState } = usePostCompare();
  const { mutate: changeLikeState } = usePostLike();

  const { data: comparedData = [] } = useGetCompare();

  const [isComparedState, setIsComparedState] = useState<
    Record<number, boolean>
  >({});

  const getCompared = (id: number): boolean => {
    const local = isComparedState[id];
    if (local !== undefined) {
      return local;
    }
    const server = comparedData.find((font) => font.id === id);
    return server?.isCompared ?? false;
  };

  const [filters, setFilters] = useState<Filters>({ ...INITIAL_FILTERS });

  const handleToggleFilter = useCallback((key: FilterKey) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({ ...INITIAL_FILTERS });
  }, []);

  const handleToggleCompare = (fontId: number) => {
    setIsComparedState((prev) => {
      const current = prev[fontId] ?? getCompared(fontId);
      const next = !current;
      changeCompareState({
        fontId,
        request: { isCompared: next },
      });
      return {
        ...prev,
        [fontId]: next,
      };
    });
  };

  const handleToggleLike = (fontId: number) => {
    const target = fonts.find((font) => font.id === fontId);
    if (!target) {
      return;
    }
    const nextLikeState = !target.isLiked;
    changeLikeState({
      fontId,
      request: { isLiked: nextLikeState },
    });
    actions.handleToggleLike(fontId);
  };

  return (
    <div className={styles.storagePageContainer}>
      <div className={styles.pageTitle}>
        <h2>보관함</h2>
        <FreeFontButton onClick={actions.handleNavigateToFree} />
      </div>

      <div className={styles.pageMainSection}>
        <div className={styles.sidePanelContainer}>
          <SidePanel
            filters={filters}
            onToggleFilter={handleToggleFilter}
            onReset={handleResetFilters}
          />
        </div>

        <main className={styles.fontInfoContainer}>
          <Tab value={uiState.currentTab} onClick={actions.setCurrentTab} />

          <div className={styles.fontContent}>
            <FontToolBar
              viewMode={uiState.viewMode}
              previewText={actionState.globalPhrase}
              fontSize={actionState.fontSize}
              searchText={actionState.searchText}
              sortOption={actionState.sortOption}
              onViewModeChange={actions.handleViewModeChange}
              onPreviewChange={actions.handleGlobalPhraseChange}
              onSizeChange={actions.handleSizeChange}
              onSearchChange={actions.handleSearchChange}
              onSortChange={actions.setSortOption}
            />
            {uiState.currentTab === 'compare' && (
              <DeleteButtonBar onClick={actions.handleDeleteAll} />
            )}

            {uiState.viewMode === 'grid' ? (
              <FontCardView
                items={
                  uiState.currentTab === 'compare' ? comparedData : displayFonts
                }
                globalPhrase={actionState.globalPhrase}
                onToggleLike={handleToggleLike}
                onToggleCompare={handleToggleCompare}
                getCompared={getCompared}
              />
            ) : (
              <FontListView
                items={
                  uiState.currentTab === 'compare' ? comparedData : displayFonts
                }
                globalPhrase={actionState.globalPhrase}
                onToggleLike={handleToggleLike}
                onToggleCompare={handleToggleCompare}
                getCompared={getCompared}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Storage;
