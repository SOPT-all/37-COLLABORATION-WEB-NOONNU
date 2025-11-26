import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { routePath } from '@/router/path';
import SidePanel from '@/shared/components/side-panel/side-panel';
import { fontItem } from '@/shared/mocks/font-item';
import type { SortType } from '@/shared/types/drop-down';
import type { FontItemType } from '@/shared/types/font';
import type { LayoutToggleType } from '@/shared/types/layout-toggle';
import type { TabLabelTypes } from '@/shared/types/tab';
import DeleteButtonBar from '@/widgets/storage/components/delete-buttonbar/delete-buttonbar';
import FontCardView from '@/widgets/storage/components/font-card-view/font-card-view';
import FontListView from '@/widgets/storage/components/font-list-view/font-list-view';
import FontToolBar from '@/widgets/storage/components/font-toolbar/font-toolbar';
import FreeFontButton from '@/widgets/storage/components/free-font-button/free-font-button';
import Tab from '@/widgets/storage/components/tab/tab';

import * as styles from './storage.css';

const Storage = () => {
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<LayoutToggleType>('list');
  const [currentTab, setCurrentTab] = useState<TabLabelTypes>('compare');
  const [globalPhrase, setGlobalPhrase] = useState('');
  const [fontSize, setFontSize] = useState(30);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState<SortType>('인기순');

  // tanstack query 사용 시 삭제될 state
  const [fonts, setFonts] = useState<FontItemType[]>(fontItem);

  const handleSizeChange = useCallback(
    (value: number) => setFontSize(value),
    [],
  );

  const handleViewModeChange = () => {
    setViewMode((prev) => (prev === 'list' ? 'grid' : 'list'));
  };

  const handleGlobalPhraseChange = (value: string) => {
    setGlobalPhrase(value);
  };

  const handleToggleLike = (id: number) => {
    setFonts((prev) =>
      prev.map((font) =>
        font.id === id ? { ...font, isLiked: !font.isLiked } : font,
      ),
    );
    // 추후 API 로직 추가
  };

  const handleToggleCompare = (id: number) => {
    setFonts((prev) =>
      prev.map((font) =>
        font.id === id ? { ...font, isCompared: !font.isCompared } : font,
      ),
    );
    // 추후 API 로직 추가
  };

  const handleDeleteAll = () => {
    if (!window.confirm('폰트비교에 담긴 모든 폰트를 삭제할까요?')) {
      return;
    }

    setFonts([]);
    // 추후 API 로직 추가
  };

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  return (
    <div className={styles.storagePageContainer}>
      <div className={styles.pageTitle}>
        <h2>보관함</h2>
        <FreeFontButton
          onClick={() => {
            navigate(routePath.FREE);
          }}
        />
      </div>

      <div className={styles.pageMainSection}>
        <div className={styles.sidePanelContainer}>
          <SidePanel />
        </div>

        <main className={styles.fontInfoContainer}>
          <Tab value={currentTab} onClick={setCurrentTab} />

          <div className={styles.fontContent}>
            <FontToolBar
              viewMode={viewMode}
              previewText={globalPhrase}
              fontSize={fontSize}
              searchText={searchText}
              sortOption={sortOption}
              onViewModeChange={handleViewModeChange}
              onPreviewChange={handleGlobalPhraseChange}
              onSizeChange={handleSizeChange}
              onSearchChange={handleSearchChange}
              onSortChange={setSortOption}
            />
            {currentTab === 'compare' && (
              <DeleteButtonBar onClick={handleDeleteAll} />
            )}

            {viewMode === 'grid' ? (
              <FontCardView
                items={fonts}
                globalPhrase={globalPhrase}
                onToggleLike={handleToggleLike}
                onToggleCompare={handleToggleCompare}
              />
            ) : (
              <FontListView
                items={fonts}
                globalPhrase={globalPhrase}
                onToggleLike={handleToggleLike}
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
