import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { routePath } from '@/router/path';
import SidePanel from '@/shared/components/side-panel/side-panel';
import { fontItem } from '@/shared/mocks/font-item';
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
        <SidePanel />

        <main className={styles.fontInfoContainer}>
          <Tab value={currentTab} onClick={setCurrentTab} />

          <div className={styles.fontContent}>
            <FontToolBar
              viewMode={viewMode}
              previewText={globalPhrase}
              fontSize={fontSize}
              onViewModeChange={handleViewModeChange}
              onPreviewChange={handleGlobalPhraseChange}
              onSizeChange={handleSizeChange}
            />
            <DeleteButtonBar onClick={() => {}} />

            {viewMode === 'grid' ? (
              <FontCardView
                items={fontItem}
                globalPhrase={globalPhrase}
                onToggleLike={() => {}}
                onToggleCompare={() => {}}
              />
            ) : (
              <FontListView
                items={fontItem}
                globalPhrase={globalPhrase}
                onToggleLike={() => {}}
                onToggleCompare={() => {}}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Storage;
