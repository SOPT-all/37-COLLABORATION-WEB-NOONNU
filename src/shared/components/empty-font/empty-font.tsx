import { CharacterEmptyIcon } from '@/shared/icons';

import * as styles from './empty-font.css';

const EmptyFont = () => {
  return (
    <section className={styles.emptyfontContainer}>
      <CharacterEmptyIcon width={144} height={144} />
      <p className={styles.errorMessage}>앗 검색결과가 없어요!</p>
    </section>
  );
};

export default EmptyFont;
