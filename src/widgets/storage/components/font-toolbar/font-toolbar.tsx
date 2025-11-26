import DropDown from '@/shared/components/drop-down/drop-down';
import InputField from '@/shared/components/input-field/input-field';
import { LayoutToggle } from '@/shared/components/layout-toggle/layout-toggle';
import Slider from '@/shared/components/slider/slider';
import type { SortType } from '@/shared/types/drop-down';
import type { LayoutToggleType } from '@/shared/types/layout-toggle';

import * as styles from './font-toolbar.css';

interface FontToolBarProps {
  viewMode: LayoutToggleType;
  previewText: string;
  fontSize: number;
  searchText: string;
  sortOption: SortType;
  onPreviewChange: (value: string) => void;
  onViewModeChange: () => void;
  onSizeChange: (value: number) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortType) => void;

  /* 추가로 필요한 props 추후에 추가 */
}

const FontToolBar = ({
  viewMode,
  previewText,
  fontSize,
  searchText,
  sortOption,
  onPreviewChange,
  onViewModeChange,
  onSizeChange,
  onSearchChange,
  onSortChange,
}: FontToolBarProps) => {
  return (
    <div className={styles.fontToolBar}>
      <div className={styles.fieldControl}>
        <div className={styles.searchInput}>
          <InputField
            value={searchText}
            placeholder='폰트비교에서 검색'
            variant='search'
            onChange={onSearchChange}
          />
        </div>
        <div className={styles.slider}>
          <Slider
            label='크기'
            value={fontSize}
            unit='px'
            onChange={onSizeChange}
            min={0}
            max={100}
          />
        </div>
        <div className={styles.previewInput}>
          <InputField
            value={previewText}
            placeholder='문구 적고 폰트 미리보기'
            variant='write'
            onChange={onPreviewChange}
          />
        </div>
      </div>
      <div className={styles.layoutControl}>
        <DropDown value={sortOption} onChange={onSortChange} />
        <LayoutToggle value={viewMode} onClick={onViewModeChange} />
      </div>
    </div>
  );
};

export default FontToolBar;
