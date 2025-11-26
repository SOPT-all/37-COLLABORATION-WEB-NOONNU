import type { SVGProps } from 'react';

import * as styles from './chip.css';

interface TitleChipProps {
  isSelected: boolean;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  label?: string;
}

const TitleChip = ({ isSelected, Icon, onClick, label }: TitleChipProps) => {
  return (
    <button
      type='button'
      className={styles.chip({ isSelected })}
      onClick={onClick}
      aria-label={label}
    >
      <Icon className={styles.titleImage} />
    </button>
  );
};

export default TitleChip;
