import * as styles from './tab.css';

export type TabLabelTypes = 'compare' | 'bookmark';

export interface TabLabelProps {
  value: TabLabelTypes;
  onChange: (nextValue: TabLabelTypes) => void;
  labels?: {
    compare?: string;
    bookmark?: string;
  };
}

export const Tab = ({ value, onChange, labels }: TabLabelProps) => {
  const compareLabel = labels?.compare ?? '폰트비교';
  const bookmarkLabel = labels?.bookmark ?? '찜목록';

  const handleCompareClick = () => {
    if (value === 'compare') {
      return;
    }
    onChange('compare');
  };

  const handleBookmarkClick = () => {
    if (value === 'bookmark') {
      return;
    }
    onChange('bookmark');
  };

  return (
    <div className={styles.container}>
      <button
        type='button'
        onClick={handleCompareClick}
        className={styles.tabButton({
          state: value === 'compare' ? 'active' : 'inactive',
        })}
        aria-pressed={value === 'compare'}
      >
        {compareLabel}
      </button>

      <span className={styles.divider} aria-hidden='true' />

      <button
        type='button'
        onClick={handleBookmarkClick}
        className={styles.tabButton({
          state: value === 'bookmark' ? 'active' : 'inactive',
        })}
        aria-pressed={value === 'bookmark'}
      >
        {bookmarkLabel}
      </button>
    </div>
  );
};
