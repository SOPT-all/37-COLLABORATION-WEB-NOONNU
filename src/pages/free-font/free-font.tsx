import FontList from '@/shared/components/floating-font-list-box/components/font-list/font-list';
import FloatingFontListBox from '@/shared/components/floating-font-list-box/floating-font-list-box';

const FreeFont = () => {
  return (
    <div>
      무료폰트 페이지
      <FontList fontName='프리텐다드' onDelete={() => {}} />
      <FloatingFontListBox />
    </div>
  );
};

export default FreeFont;
