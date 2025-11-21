import FontList from '@/shared/components/floating-font-list-box/font-list';

const FreeFont = () => {
  return (
    <div>
      무료폰트 페이지
      <FontList fontName='프리텐다드' onDelete={() => {}} />
    </div>
  );
};

export default FreeFont;
