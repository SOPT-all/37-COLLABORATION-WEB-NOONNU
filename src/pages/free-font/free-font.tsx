import { toast } from 'react-toastify';
import Toast from '@/shared/components/toast/toast';

const FreeFont = () => {
  const showCustomToast = () => {
    toast(<Toast />, {
      autoClose: 3500,
      hideProgressBar: true,
      closeButton: false,
    });
  };

  return (
    <div>
      <h2>무료폰트 페이지</h2>

      <button onClick={showCustomToast}>
        폰트 비교 목록에 추가 (토스트 테스트)
      </button>
    </div>
  );
};

export default FreeFont;
