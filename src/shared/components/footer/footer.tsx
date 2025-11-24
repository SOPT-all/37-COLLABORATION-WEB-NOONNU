import {
  FacebookIcon,
  InstagramIcon,
  LogoGrayIcon,
  MailyIcon,
} from '@/shared/icons';

import * as styles from './footer.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <LogoGrayIcon width={48} height={24} className={styles.logo} />
      <div className={styles.contentContainer}>
        <div className={styles.mainText}>
          <p>© 2025 Project Noonnu Corp. All rights reserved.</p>
          <p>
            모든 폰트의 저작권은 모두 각 폰트의 저작권자에게 있습니다. <br />
            폰트 사용에 대한 라이센스 문의는 저작권자에게 문의해주세요.
          </p>
          <p>제휴 및 광고 문의 team@noonnu.cc</p>
          <div className={styles.linkList}>
            <a href='#' className={styles.linkItem}>
              이용약관
            </a>
            <a href='#' className={styles.linkItem}>
              개인정보처리방침
            </a>
          </div>
          <div className={styles.businessInformationText}>
            <p>눈누 사업자 정보</p>
            <div className={styles.linkList}>
              <p className={styles.linkItem}>주식회사 프로젝트 눈누</p>
              <p className={styles.linkItem}>대표 윤민지</p>
              <p className={styles.linkItem}>사업자등록번호 359-88-01705</p>
              <p className={`${styles.linkItem} ${styles.addSeperator}`}>
                통신판매업신고번호 제2025-서울성동-1605
              </p>
            </div>
            <div className={styles.linkList}>
              <p className={styles.linkItem}>개인정보관리책임자 이한결</p>
              <p className={styles.linkItem}>
                서울 성동구 왕십리로10길 6, 1109
              </p>
              <p className={styles.linkItem}>문의 team@noonnu.cc</p>
              <p className={styles.linkItem}>070-8019-1438</p>
            </div>
          </div>
        </div>

        <div className={styles.sideContainer}>
          <div className={styles.sideText}>
            <div>
              <p className={styles.sideTextName}>눈누</p>
              <div className={styles.sideTextContent}>
                <a href='#'>무료 폰트 제보</a>
                <a href='#'>기업 광고 문의</a>
                <a href='#'>자주 묻는 질문</a>
              </div>
            </div>
            <div>
              <p className={styles.sideTextName}>눈누 마켓</p>
              <a href='#' className={styles.sideTextContent}>
                입점 신청
              </a>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <MailyIcon width={36} height={36} />
            <InstagramIcon width={36} height={36} />
            <FacebookIcon width={36} height={36} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
