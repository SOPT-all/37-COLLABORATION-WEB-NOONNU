import { CharacterEmptyIcon } from '@/shared/icons';

import * as styles from './empty-font.css';

interface EmptyFontProps {
  text: string;
}

const EmptyFont = ({ text }: EmptyFontProps) => {
  return (
    <section className={styles.emptyfontContainer}>
      <CharacterEmptyIcon width={144} height={144} />
      <p className={styles.errorMessage}>{text}</p>
    </section>
  );
};

export default EmptyFont;
