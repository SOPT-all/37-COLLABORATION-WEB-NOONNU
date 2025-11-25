import type { ReactNode } from 'react';

import * as styles from './filter-section.css';

interface FilterSectionProps {
  subtitle?: string;
  children: ReactNode;
  type: 'title' | 'range';
}

const FilterSection = ({ subtitle, children, type }: FilterSectionProps) => {
  return (
    <section className={styles.container} data-type={type}>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.chipSet} data-has-subtitle={Boolean(subtitle)}>
        {children}
      </div>
    </section>
  );
};

export default FilterSection;
