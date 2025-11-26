import CardView from '@/shared/components/card-view/card-view';
import type { FontItemType } from '@/shared/types/font';

import * as styles from './font-card-view.css';

interface FontCardViewProps {
  items: FontItemType[];
  globalPhrase: string;
  onToggleLike: (id: number) => void;
  onToggleCompare: (id: number) => void;
}

const FontCardView = ({
  items,
  globalPhrase,
  onToggleLike,
  onToggleCompare,
}: FontCardViewProps) => {
  return (
    <div className={styles.gridContainer}>
      {items.map((item) => (
        <CardView
          key={item.id}
          {...item}
          globalPhrase={globalPhrase}
          onToggleCompare={onToggleCompare}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
};

export default FontCardView;
