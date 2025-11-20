import { toast } from 'react-toastify';
import Toast, { type ToastProps } from '@/shared/components/toast/toast';

const FreeFont = () => {
  const showToast = (props: ToastProps) => {
    toast(<Toast {...props} />);
  };

  const FONT_NAME = '어그로체';

  return (
    <div style={{ padding: '1rem' }}>
      <h2>무료폰트 페이지</h2>

      <button
        onClick={() => showToast({ fontName: FONT_NAME, status: 'added' })}
      >
        추가
      </button>
      <div style={{ padding: '1rem' }}></div>
      <button
        onClick={() => showToast({ fontName: FONT_NAME, status: 'removed' })}
      >
        삭제
      </button>
    </div>
  );
};

export default FreeFont;
