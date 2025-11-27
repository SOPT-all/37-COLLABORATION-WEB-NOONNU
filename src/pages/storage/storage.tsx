import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { routePath } from '@/router/path';
import {
  useCompareResetAll,
  useGetCompare,
  useGetLiked,
  usePostCompare,
} from '@/shared/apis/domain/user-font';
import SidePanel from '@/shared/components/side-panel/side-panel';
// import { fontItem } from '@/shared/mocks/font-item';
import type { SortType } from '@/shared/types/drop-down';
import type { LayoutToggleType } from '@/shared/types/layout-toggle';
import type { TabLabelTypes } from '@/shared/types/tab';
import {
  DeleteButtonBar,
  FontCardView,
  FontListView,
  FontToolBar,
  FreeFontButton,
  Tab,
} from '@/widgets/storage/components/index.ts';

import * as styles from './storage.css';

const FONT_SIZE = 30;

const Storage = () => {
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<LayoutToggleType>('list');
  const [currentTab, setCurrentTab] = useState<TabLabelTypes>('compare');
  const [globalPhrase, setGlobalPhrase] = useState('');
  const [fontSize, setFontSize] = useState(FONT_SIZE);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState<SortType>('인기순');

  const { data: comparedFonts = [] } = useGetCompare();
  const { data: likedFonts = [] } = useGetLiked();
  const { mutate: changeCompareState } = usePostCompare();
  const { mutate: resetAllCompare } = useCompareResetAll();

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
    console.log(id, 'Like 연결');
    // 추후 API 로직 추가
  };

  const findFontById = (fontId: number) => {
    const fromCompared = comparedFonts.find((font) => font.id === fontId);
    if (fromCompared) {
      return fromCompared;
    }

    const fromLiked = likedFonts.find((font) => font.id === fontId);
    if (fromLiked) {
      return fromLiked;
    }

    return null;
  };

  const handleToggleCompare = (fontId: number) => {
    const target = findFontById(fontId);
    if (!target) {
      return;
    }
    changeCompareState({
      fontId,
      request: { isCompared: !target.isCompared },
    });
  };

  const handleDeleteAll = () => {
    if (!window.confirm('폰트비교에 담긴 모든 폰트를 삭제할까요?')) {
      return;
    }
    const fontIds = comparedFonts.map((font) => font.id);
    resetAllCompare(fontIds);
  };

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  const items = currentTab === 'compare' ? comparedFonts : likedFonts;

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
                items={items}
                globalPhrase={globalPhrase}
                onToggleLike={handleToggleLike}
                onToggleCompare={handleToggleCompare}
              />
            ) : (
              <FontListView
                items={items}
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
