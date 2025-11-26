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
  const { uiState, actionState, displayFonts, actions } = useStorage();

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
                onToggleCompare={actions.handleToggleCompare}
              />
            ) : (
              <FontListView
                items={displayFonts}
                globalPhrase={actionState.globalPhrase}
                onToggleLike={actions.handleToggleLike}
                onToggleCompare={actions.handleToggleCompare}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Storage;
