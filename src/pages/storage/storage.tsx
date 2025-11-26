import { usePostCompare } from '@/shared/apis/domain/user-font';
import {
  DeleteButtonBar,
  FontCardView,
  FontListView,
  FontToolBar,
  FreeFontButton,
  SidePanel,
  Tab,
} from '@/widgets/storage/components/index.ts';
import { useStorage } from '@/widgets/storage/hooks/useStorage';

import * as styles from './storage.css';

const Storage = () => {
  const { uiState, actionState, fonts, displayFonts, actions } = useStorage();
  const { mutate: changeCompareState } = usePostCompare();

  const handleToggleCompare = (fontId: number) => {
    const target = fonts.find((font) => font.id === fontId);
    if (!target) {
      return;
    }

    const nextCompareState = !target.isCompared;

    changeCompareState({
      fontId,
      request: { isCompared: nextCompareState },
    });
    actions.handleToggleCompare(fontId);
  };

  return (
    <div className={styles.storagePageContainer}>
      <div className={styles.pageTitle}>
        <h2>보관함</h2>
        <FreeFontButton onClick={actions.handleNavigateToFree} />
      </div>

      <div className={styles.pageMainSection}>
        <div className={styles.sidePanelContainer}>
          <SidePanel />
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
                items={displayFonts}
                globalPhrase={actionState.globalPhrase}
                onToggleLike={actions.handleToggleLike}
                onToggleCompare={handleToggleCompare}
              />
            ) : (
              <FontListView
                items={displayFonts}
                globalPhrase={actionState.globalPhrase}
                onToggleLike={actions.handleToggleLike}
                onToggleCompare={handleToggleCompare}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Storage;
