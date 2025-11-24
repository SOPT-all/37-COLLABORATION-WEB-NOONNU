import * as styles from './tab.css';

export type TabLabelTypes = 'compare' | 'bookmark';

interface TabLabelProps {
  value: TabLabelTypes;
  onClick: (nextValue: TabLabelTypes) => void;
}

const Tab = ({ value, onClick }: TabLabelProps) => {
  const handleClick = (target: TabLabelTypes) => {
    if (value === target) {
      return;
    }
    onClick(target);
  };

  return (
    <div className={styles.container}>
      <button
        type='button'
        onClick={() => handleClick('compare')}
        className={styles.tabButton({
          state: value === 'compare' ? 'active' : 'inactive',
        })}
      >
        폰트비교
      </button>

      <span className={styles.divider} />

      <button
        type='button'
        onClick={() => handleClick('bookmark')}
        className={styles.tabButton({
          state: value === 'bookmark' ? 'active' : 'inactive',
        })}
      >
        찜목록
      </button>
    </div>
  );
};

export default Tab;
