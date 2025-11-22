import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { routePath } from '@/router/path';
import {
  AlarmIcon,
  LanguageIcon,
  LogoBlackIcon,
  MenuIcon,
  NightIcon,
  StarIcon,
} from '@/shared/icons';

import * as styles from './header.css';

const TEXT = {
  FREE_FONT: '무료 폰트',
  RECOMMEND_FONT: '추천 폰트',
  NOONNU_MARGET: '눈누 마켓',
  QUESTION_FONT: '무슨 폰트?',
  SHARE_DESIGN: '디자인 공유',
} as const;

type TextValue = (typeof TEXT)[keyof typeof TEXT];

const initialActiveMenu = (pathname: string): TextValue | null => {
  if (pathname === routePath.FREE) {
    return TEXT.FREE_FONT;
  }
  if (pathname === routePath.STORAGE) {
    return null;
  }
  return null;
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<TextValue | null>(
    initialActiveMenu(location.pathname),
  );

  const isEqual = (value: TextValue) => activeMenu === value;

  const handleClickMenu = (menu: TextValue | null, path?: string) => {
    setActiveMenu(menu);
    if (path) {
      navigate(path);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <LogoBlackIcon width={48} height={24} />
        <div className={styles.textButtonContainer}>
          <button
            className={styles.textButton({
              isEqual: isEqual(TEXT.RECOMMEND_FONT),
            })}
            onClick={() => handleClickMenu(TEXT.RECOMMEND_FONT)}
          >
            {TEXT.RECOMMEND_FONT}
          </button>
          <button
            className={styles.textButton({
              isEqual: isEqual(TEXT.FREE_FONT),
            })}
            onClick={() => handleClickMenu(TEXT.FREE_FONT, routePath.FREE)}
          >
            {TEXT.FREE_FONT}
          </button>
          <button
            className={styles.textButton({
              isEqual: isEqual(TEXT.NOONNU_MARGET),
            })}
            onClick={() => handleClickMenu(TEXT.NOONNU_MARGET)}
          >
            {TEXT.NOONNU_MARGET}
          </button>
          <button
            className={styles.textButton({
              isEqual: isEqual(TEXT.QUESTION_FONT),
            })}
            onClick={() => handleClickMenu(TEXT.QUESTION_FONT)}
          >
            {TEXT.QUESTION_FONT}
          </button>
          <button
            className={styles.textButton({
              isEqual: isEqual(TEXT.SHARE_DESIGN),
            })}
            onClick={() => handleClickMenu(TEXT.SHARE_DESIGN)}
          >
            {TEXT.SHARE_DESIGN}
          </button>
        </div>
      </div>
      <div className={styles.rightContainer}>
        {/* input 컴포넌트 위치 */}
        <div className={styles.iconContainer}>
          <button className={styles.icon}>
            <NightIcon width={24} height={24} />
          </button>
          <button className={styles.icon}>
            <LanguageIcon width={24} height={24} />
          </button>
          <button className={styles.icon}>
            <AlarmIcon width={24} height={24} />
          </button>
          <button
            className={styles.icon}
            onClick={() => handleClickMenu(null, routePath.STORAGE)}
          >
            <StarIcon width={24} height={24} />
          </button>
          <button className={styles.icon}>
            <MenuIcon width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
