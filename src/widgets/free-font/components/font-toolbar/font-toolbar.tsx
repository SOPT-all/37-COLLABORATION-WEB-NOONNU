// src/widgets/free-font/components/font-tool-bar/font-tool-bar.tsx
import { memo } from 'react';

import InputField from '@/shared/components/input-field/input-field';
import { LayoutToggle } from '@/shared/components/layout-toggle/layout-toggle';
import Slider from '@/shared/components/slider/slider';
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
  return (
    <div className={styles.container}>
      <Slider label='크기' value={fontSize} unit='px' onChange={onSizeChange} />
      <InputField
        value={previewText}
        onChange={onInputChange}
        placeholder='문구 적고 폰트 미리보기'
        variant='search'
      />
      <LayoutToggle value={layout} onClick={onLayoutChange} />
    </div>
  );
};

export default memo(FontToolBar);
