import CardView from '@/shared/components/card-view/card-view';
import EmptyFont from '@/shared/components/empty-font/empty-font';
import type { FontItemType } from '@/shared/types/font';

import * as styles from './font-card-view.css';

interface FontCardViewProps {
  items: FontItemType[];
  globalPhrase: string;
  onToggleLike: (id: number, name: string, isCompared: boolean) => void;
  onToggleCompare: (id: number) => void;
  getCompared: (id: number) => boolean;
  getLiked: (id: number) => boolean;
}

const FontCardView = ({
  items,
  globalPhrase,
  onToggleLike,
  onToggleCompare,
  getCompared,
  getLiked,
}: FontCardViewProps) => {
  return (
    <>
      {items.length > 0 ? (
        <div className={styles.gridContainer}>
          {items.map((item) => (
            <CardView
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

export default FontCardView;
