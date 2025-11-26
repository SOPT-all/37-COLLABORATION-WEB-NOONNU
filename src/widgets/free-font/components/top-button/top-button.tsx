import { useCallback } from 'react';

import { ArrowUpLgIcon } from '@/shared/icons';
import { useScrollToggle } from '@/widgets/free-font/hooks/use-scroll-toggle';

import * as styles from './top-button.css';

const TopButton = () => {
  const isVisible = useScrollToggle();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className={`${styles.button} ${isVisible ? styles.visible : styles.hidden}`}
      aria-label='맨 위로 이동'
    >
      <ArrowUpLgIcon />
    </button>
  );
};

export default TopButton;
