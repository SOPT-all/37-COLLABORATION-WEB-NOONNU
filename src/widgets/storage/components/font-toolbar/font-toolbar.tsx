import { useState } from 'react';

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
  onPreviewChange: (value: string) => void;
  onViewModeChange: () => void;
  onSizeChange: (value: number) => void;

  /* 추가로 필요한 props 추후에 추가 */
}

const FontToolBar = ({
  viewMode,
  previewText,
  fontSize,
  onPreviewChange,
  onViewModeChange,
  onSizeChange,
}: FontToolBarProps) => {
  const [sort, setSort] = useState<SortType>('인기순');

  return (
    <div className={styles.fontToolBar}>
      <div className={styles.fieldControl}>
        <div className={styles.searchInput}>
          <InputField
            value=''
            placeholder='폰트비교에서 검색'
            variant='search'
            onChange={() => {}}
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
        <DropDown value={sort} onChange={setSort} />
        <LayoutToggle value={viewMode} onClick={onViewModeChange} />
      </div>
    </div>
  );
};

export default FontToolBar;
