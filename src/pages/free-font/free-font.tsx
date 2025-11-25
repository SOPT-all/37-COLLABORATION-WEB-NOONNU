import Slider from '@/shared/components/slider/slider';
import * as styles from './free-font.css';
import { useState, useCallback } from 'react';

const FreeFont = () => {
  const [fontSize, setFontSize] = useState(30);
  const handleSizeChange = useCallback((value: number) => {
    setFontSize(value);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <span className={styles.bannerSubtitle}>
          폰트 판매, 눈누가 도와드릴게요
        </span>
        <span className={styles.bannerTitle}>
          눈누마켓과 함께할
          <br />
          폰트 디자이너를 찾아요
        </span>
      </div>
      <div>
        <Slider
          label='크기'
          value={fontSize}
          unit='px'
          onChange={handleSizeChange}
        />
      </div>
    </div>
  );
};

export default FreeFont;
