import { useState } from 'react';

import type { LayoutToggleType } from '@/shared/types/layout-toggle';
import type { TabLabelTypes } from '@/shared/types/tab';

export const useStorageUI = () => {
  const [viewMode, setViewMode] = useState<LayoutToggleType>('list');
  const [currentTab, setCurrentTab] = useState<TabLabelTypes>('compare');

  const handleViewModeChange = () => {
    setViewMode((prev) => (prev === 'list' ? 'grid' : 'list'));
  };

  return {
    viewMode,
    currentTab,
    actions: {
      setCurrentTab,
      handleViewModeChange,
    },
  };
};
