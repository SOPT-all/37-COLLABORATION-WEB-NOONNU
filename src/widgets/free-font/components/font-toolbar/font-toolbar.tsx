import { memo } from 'react';
import { useState } from 'react';

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
  onSizeChange: (value: number) => void;
  onInputChange: (text: string) => void;
  onLayoutChange: (layout: LayoutToggleType) => void;
}

const FontToolBar = ({
  fontSize,
  previewText,
  layout,
  onSizeChange,
  onInputChange,
  onLayoutChange,
}: FontToolBarProps) => {
  const [sort, setSort] = useState<SortType>('인기순');

  return (
    <div className={styles.container}>
      <Slider label='크기' value={fontSize} unit='px' onChange={onSizeChange} />

      <div className={styles.input}>
        <InputField
          value={previewText}
          onChange={onInputChange}
          placeholder='문구 적고 폰트 미리보기'
          variant='write'
        />
      </div>
      <DropDown value={sort} onChange={setSort} />
      <LayoutToggle value={layout} onClick={onLayoutChange} />
    </div>
  );
};

export default memo(FontToolBar);
