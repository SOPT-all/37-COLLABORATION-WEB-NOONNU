import EmptyFont from '@/shared/components/empty-font/empty-font';
import ListView from '@/shared/components/list-view/list-view';
import type { FontItemType } from '@/shared/types/font';

import * as styles from './font-list-view.css';

interface FontListViewProps {
  items: FontItemType[];
  globalPhrase: string;
  onToggleLike: (id: number, name: string, isCompared: boolean) => void;
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
    <>
      {items.length > 0 ? (
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
      ) : (
        <EmptyFont text='아직 담은 폰트가 없어요' />
      )}
    </>
  );
};

export default FontListView;
