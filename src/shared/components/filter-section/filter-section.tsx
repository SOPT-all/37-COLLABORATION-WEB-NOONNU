import type { ReactNode } from 'react';
import * as styles from './filter-section.css';

interface FilterSectionProps {
  subtitle: string;
  children: ReactNode;
  type: 'title' | 'range';
}

const FilterSection = ({ subtitle, children, type }: FilterSectionProps) => {
  return (
    <section className={styles.container} data-type={type}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.chipSet}>{children}</div>
    </section>
  );
};

export default FilterSection;
