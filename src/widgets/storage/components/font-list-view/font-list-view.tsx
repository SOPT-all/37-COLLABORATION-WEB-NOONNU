import ListView from '@/shared/components/list-view/list-view';
import type { FontItemType } from '@/shared/types/font';

import * as styles from './font-list-view.css';

interface FontListViewProps {
  items: FontItemType[];
  globalPhrase: string;
  onToggleLike: (id: number) => void;
  onToggleCompare: (id: number) => void;
  getCompared: (id: number) => boolean;
  getLiked: (id: number) => boolean;
}

const FontListView = ({
  items,
  globalPhrase,
  onToggleLike,
  onToggleCompare,
  getCompared,
  getLiked,
}: FontListViewProps) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <ListView
          key={item.id}
          {...item}
          globalPhrase={globalPhrase}
          onToggleCompare={onToggleCompare}
          onToggleLike={onToggleLike}
          isCompared={getCompared(item.id)}
          isLiked={getLiked(item.id)}
        />
      ))}
    </div>
  );
};

export default FontListView;
