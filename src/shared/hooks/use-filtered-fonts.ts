import { useMemo } from 'react';

import { useGetFonts } from '@/shared/apis/domain/font';
import type { Filters } from '@/shared/constants/filter-keys';
import type { SortType } from '@/shared/types/drop-down';
import type { FontItemType } from '@/shared/types/font';
import { convertFiltersToApiParams } from '@/shared/utils/filter-mapper';
import { mapFontResponseToFontItem } from '@/shared/utils/font-mapper';
import { convertSortToApiParam } from '@/shared/utils/sort-mapper';

export const useFilteredFonts = (filters: Filters, sortOption: SortType) => {
  const apiParams = useMemo(() => {
    const filterParams = convertFiltersToApiParams(filters);
    return {
      sortBy: convertSortToApiParam(sortOption),
      ...filterParams,
    };
  }, [filters, sortOption]);

  const { data: fontsData, isLoading } = useGetFonts(apiParams);

  const fonts: FontItemType[] = useMemo(() => {
    if (!fontsData?.result?.fonts) {
      return [];
    }
    return fontsData.result.fonts.map(mapFontResponseToFontItem);
  }, [fontsData]);

  return { fonts, isLoading };
};
