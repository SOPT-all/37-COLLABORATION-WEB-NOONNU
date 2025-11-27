import { useCallback, useMemo, useState } from 'react';

import {
  useGetCompare,
  useGetLiked,
  usePostCompare,
  usePostLike,
} from '@/shared/apis/domain/user-font';
import { queryKey } from '@/shared/apis/keys/query-key';
import { queryClient } from '@/shared/apis/query-client';
import {
  type FilterKey,
  type Filters,
  INITIAL_FILTERS,
} from '@/shared/constants/filter-keys';
import { useFilteredFonts } from '@/shared/hooks/use-filtered-fonts';
import type { FontItemType } from '@/shared/types/font';
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

const userId = 1;

const Storage = () => {
  const { uiState, actionState, actions } = useStorage();

  const { mutate: changeCompareState } = usePostCompare();
  const { mutate: changeLikeState } = usePostLike();

  const { data: comparedData = [] } = useGetCompare();
  const { data: likedData = [] } = useGetLiked();

  const [isComparedState, setIsComparedState] = useState<
    Record<number, boolean>
  >({});
  const [isLikedState, setIsLikedState] = useState<Record<number, boolean>>({});

  const getCompared = (id: number): boolean => {
    const local = isComparedState[id];
    if (local !== undefined) {
      return local;
    }
    const server = comparedData.find((font) => font.id === id);
    return server?.isCompared ?? false;
  };

  const getLiked = (id: number): boolean => {
    const local = isLikedState[id];
    if (local !== undefined) {
      return local;
    }
    const server = likedData.find((font) => font.id === id);
    return server?.isLiked ?? false;
  };

  const [filters, setFilters] = useState<Filters>({ ...INITIAL_FILTERS });

  const { fonts: allFilteredFonts } = useFilteredFonts(
    filters,
    actionState.sortOption,
  );

  const filteredComparedFonts: FontItemType[] = useMemo(() => {
    const comparedIds = new Set(comparedData.map((font) => font.id));
    return allFilteredFonts.filter((font) => comparedIds.has(font.id));
  }, [allFilteredFonts, comparedData]);

  const filteredLikedFonts: FontItemType[] = useMemo(() => {
    const likedIds = new Set(likedData.map((font) => font.id));
    return allFilteredFonts.filter((font) => likedIds.has(font.id));
  }, [allFilteredFonts, likedData]);

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
      changeCompareState(
        {
          fontId,
          request: { isCompared: next },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [queryKey.GET_COMPARE_FONT_PREVIEW, userId],
            });
            queryClient.invalidateQueries({
              queryKey: [queryKey.GET_FONTS, userId],
            });
          },
        },
      );
      return {
        ...prev,
        [fontId]: next,
      };
    });
  };

  const handleToggleLike = (fontId: number) => {
    setIsLikedState((prev) => {
      const current = prev[fontId] ?? getLiked(fontId);
      const next = !current;
      changeLikeState(
        {
          fontId,
          request: { isLiked: next },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [queryKey.GET_FONTS, userId],
            });
          },
        },
      );
      return {
        ...prev,
        [fontId]: next,
      };
    });
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
                  uiState.currentTab === 'compare'
                    ? filteredComparedFonts
                    : filteredLikedFonts
                }
                globalPhrase={actionState.globalPhrase}
                onToggleLike={handleToggleLike}
                onToggleCompare={handleToggleCompare}
                getCompared={getCompared}
                getLiked={getLiked}
              />
            ) : (
              <FontListView
                items={
                  uiState.currentTab === 'compare'
                    ? filteredComparedFonts
                    : filteredLikedFonts
                }
                globalPhrase={actionState.globalPhrase}
                onToggleLike={handleToggleLike}
                onToggleCompare={handleToggleCompare}
                getCompared={getCompared}
                getLiked={getLiked}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Storage;
