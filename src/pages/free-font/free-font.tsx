import { useState, useCallback } from 'react';
import Slider from '@/shared/components/slider/slider';

const FreeFont = () => {
  // 글자 크기
  const [fontSize, setFontSize] = useState(30);
  const handleSizeChange = useCallback((value: number) => {
    setFontSize(value);
  }, []);

  // 굵기 개수
  const [fontWeightNumber, setWeightNumber] = useState(4);
  const handleFontWeighChange = useCallback((value: number) => {
    setWeightNumber(value);
  }, []);

  return (
    <div>
      <h2>무료폰트 페이지</h2>

      <Slider
        label='크기'
        valueNumber={fontSize}
        valueUnit='px'
        onChange={handleSizeChange}
      />
      <div style={{ fontSize: `${fontSize}px` }}>
        이 텍스트의 크기가 {fontSize}px 입니다.
      </div>

      <Slider
        label='굵기 개수'
        valueNumber={fontWeightNumber}
        valueUnit='가지'
        onChange={handleFontWeighChange}
        min={1}
        max={9}
      />
    </div>
  );
};

export default FreeFont;
