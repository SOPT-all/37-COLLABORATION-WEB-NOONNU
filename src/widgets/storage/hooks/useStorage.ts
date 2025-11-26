import { useNavigate } from 'react-router';

import { routePath } from '@/router/path';
import { useStorageAction } from '@/widgets/storage/hooks/useStorageAction';
import { useStorageUI } from '@/widgets/storage/hooks/useStorageUI';

import { useStorageData } from './useStorageData';

export const useStorage = () => {
  const navigate = useNavigate();

  const ui = useStorageUI();
  const action = useStorageAction();
  const data = useStorageData();

  let displayFonts = data.fonts;

  if (action.searchText) {
    const lowerSearch = action.searchText.toLowerCase();
    displayFonts = displayFonts.filter(
      (font) =>
        font.name.toLowerCase().includes(lowerSearch) ||
        font.producer.toLowerCase().includes(lowerSearch),
    );
  }

  if (ui.currentTab === 'bookmark') {
    displayFonts = displayFonts.filter((font) => font.isLiked);
  }

  if (ui.currentTab === 'compare') {
    displayFonts = displayFonts.filter((font) => font.isCompared);
  }

  const handleNavigateToFree = () => navigate(routePath.FREE);

  return {
    uiState: {
      viewMode: ui.viewMode,
      currentTab: ui.currentTab,
    },

    actionState: {
      globalPhrase: action.globalPhrase,
      fontSize: action.fontSize,
      searchText: action.searchText,
      sortOption: action.sortOption,
    },

    displayFonts,

    actions: {
      ...ui.actions,
      ...action.actions,
      ...data.actions,
      handleNavigateToFree,
    },
    fonts: data.fonts,
  };
};
