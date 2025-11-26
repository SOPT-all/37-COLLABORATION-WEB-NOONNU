import * as styles from './banner.css';

const Banner = () => {
  return (
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
  );
};

export default Banner;
