import type { FontSort } from '@/shared/apis/types/font';
import type { SortType } from '@/shared/types/drop-down';

export const convertSortToApiParam = (sort: SortType): FontSort => {
  const sortMap: Record<SortType, FontSort> = {
    인기순: 'POPULAR',
    조회순: 'VIEW_COUNT',
    최신순: 'LATEST',
    이름순: 'NAME',
  };
  return sortMap[sort];
};
