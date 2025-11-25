import { useState } from 'react';

import { fontItem } from '@/shared/mocks/font-item';
import DeleteButtonBar from '@/widgets/storage/components/delete-buttonbar/delete-buttonbar';
import FontToolBar from '@/widgets/storage/components/font-toolbar/font-toolbar';
import FreeFontButton from '@/widgets/storage/components/free-font-button/free-font-button';
import Tab from '@/widgets/storage/components/tab/tab';
import FontCardView from '@/widgets/storage/ui/font-card-view/font-card-view';
import FontListView from '@/widgets/storage/ui/font-list-view/font-list-view';

import * as styles from './storage.css';

const Storage = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [globalPhrase, setGlobalPhrase] = useState('');

  const handleViewModeChange = () => {
    setViewMode((prev) => (prev === 'list' ? 'grid' : 'list'));
  };

  const handleGlobalPhraseChange = (value: string) => {
    setGlobalPhrase(value);
  };

  return (
    <main className={styles.storagePageContainer}>
      <div className={styles.pageTitle}>
        <h2>보관함</h2>
        <FreeFontButton onClick={() => {}} />
      </div>

      <section className={styles.pageMainSection}>
        {/* 필터 컴포넌트로 대체 예정 */}
        <div className={styles.filterComponent}></div>

        <div className={styles.fontInfoContainer}>
          <Tab value='compare' onClick={() => {}} />

          <div className={styles.fontContent}>
            <FontToolBar
              viewMode={viewMode}
              previewText={globalPhrase}
              onPreviewChange={handleGlobalPhraseChange}
              onViewModeChange={handleViewModeChange}
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
        </div>
      </section>
    </main>
  );
};

export default Storage;
