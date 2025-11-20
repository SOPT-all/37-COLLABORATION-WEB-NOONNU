import type { ReactNode } from 'react';
import * as styles from './filter-section.css';

interface FilterSectionProps {
  subtitle: string;
  children: ReactNode;
}

const FilterSection = ({ subtitle, children }: FilterSectionProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.chipSet}>{children}</div>
    </section>
  );
};

export default FilterSection;
