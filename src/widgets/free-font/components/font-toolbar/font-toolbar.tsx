import { memo } from 'react';

import DropDown from '@/shared/components/drop-down/drop-down';
import InputField from '@/shared/components/input-field/input-field';
import { LayoutToggle } from '@/shared/components/layout-toggle/layout-toggle';
import Slider from '@/shared/components/slider/slider';
import type { SortType } from '@/shared/types/drop-down';
import type { LayoutToggleType } from '@/shared/types/layout-toggle';

import * as styles from './font-toolbar.css';

interface FontToolBarProps {
  fontSize: number;
  previewText: string;
  layout: LayoutToggleType;
  sort: SortType;
  onSizeChange: (value: number) => void;
  onInputChange: (text: string) => void;
  onLayoutChange: (layout: LayoutToggleType) => void;
  onSortChange: (sort: SortType) => void;
}

const FontToolBar = ({
  fontSize,
  previewText,
  layout,
  sort,
  onSizeChange,
  onInputChange,
  onLayoutChange,
  onSortChange,
}: FontToolBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <Slider
          label='크기'
          value={fontSize}
          unit='px'
          onChange={onSizeChange}
        />
      </div>

      <div className={styles.input}>
        <InputField
          value={previewText}
          onChange={onInputChange}
          placeholder='문구 적고 폰트 미리보기'
          variant='write'
        />
      </div>
      <DropDown value={sort} onChange={onSortChange} />
      <LayoutToggle value={layout} onClick={onLayoutChange} />
    </div>
  );
};

export default memo(FontToolBar);
