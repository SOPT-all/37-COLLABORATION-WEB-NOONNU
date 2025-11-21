import ListView from '@/shared/components/list-view/list-view';

const data = {
  id: 1,
  name: '프리텐다드',
  producer: '눈누',
  thicknessNum: 3,
  phrase: '샘플 텍스트입니다',
  isLiked: false,
  isCompared: false,
};

const FreeFont = () => {
  return (
    <div style={{ width: '954px', height: '160px', margin: '100px 100px' }}>
      <ListView {...data} />
    </div>
  );
};

export default FreeFont;
