import Accordion from '@/shared/components/accordion/accordion';
import AllowedRangeChip from '@/shared/components/chip/allowed-range-chip';
import TitleChip from '@/shared/components/chip/title-chip';
import FilterSection from '@/shared/components/filter-section/filter-section';
import {
  LICENSE_ITEMS,
  MOOD_ITEMS,
  SHAPE_ITEMS,
  USAGE_SECTIONS,
} from '@/shared/constants/filter-data';
import { type FilterKey, type Filters } from '@/shared/constants/filter-keys';
import { FilterIcon, ResetIcon } from '@/shared/icons';

import * as styles from './side-panel.css';

interface SidePanelProps {
  filters: Filters;
  onToggleFilter: (key: FilterKey) => void;
  onReset: () => void;
}

const SidePanel = ({ filters, onToggleFilter, onReset }: SidePanelProps) => {
  return (
    <aside className={styles.container}>
      <header className={styles.header}>
        <div className={styles.filterLabel}>
          <FilterIcon className={styles.filterIcon} />
          <span className={styles.filterText}>필터</span>
        </div>
        <button
          type='button'
          className={styles.resetButton}
          onClick={onReset}
          aria-label='필터 초기화'
        >
          <span className={styles.resetText}>초기화</span>
          <ResetIcon className={styles.resetIcon} />
        </button>
      </header>
      <div className={styles.content}>
        <Accordion>
          <Accordion.Container>
            <Accordion.Header subtitle='용도' />
            <Accordion.Panel>
              {USAGE_SECTIONS.map((section) => (
                <FilterSection
                  key={section.sectionId}
                  type='title'
                  subtitle={section.title}
                >
                  {section.items.map((item) => (
                    <TitleChip
                      key={item.id}
                      isSelected={filters[item.id]}
                      Icon={item.Icon}
                      onClick={() => onToggleFilter(item.id as FilterKey)}
                      label={item.label}
                    />
                  ))}
                </FilterSection>
              ))}
            </Accordion.Panel>
          </Accordion.Container>
        </Accordion>
        <div className={styles.sectionDivider}>
          <Accordion>
            <Accordion.Container>
              <Accordion.Header subtitle='형태' />
              <Accordion.Panel>
                <FilterSection type='title'>
                  {SHAPE_ITEMS.map((item) => (
                    <TitleChip
                      key={item.id}
                      isSelected={filters[item.id]}
                      Icon={item.Icon}
                      onClick={() => onToggleFilter(item.id as FilterKey)}
                      label={item.label}
                    />
                  ))}
                </FilterSection>
              </Accordion.Panel>
            </Accordion.Container>
          </Accordion>
        </div>
        <div className={styles.sectionDivider}>
          <Accordion>
            <Accordion.Container>
              <Accordion.Header subtitle='분위기' />
              <Accordion.Panel>
                <FilterSection type='title'>
                  {MOOD_ITEMS.map((item) => (
                    <TitleChip
                      key={item.id}
                      isSelected={filters[item.id]}
                      Icon={item.Icon}
                      onClick={() => onToggleFilter(item.id as FilterKey)}
                      label={item.label}
                    />
                  ))}
                </FilterSection>
              </Accordion.Panel>
            </Accordion.Container>
          </Accordion>
        </div>
        <div className={styles.sectionDivider}>
          <Accordion>
            <Accordion.Container>
              <Accordion.Header subtitle='허용범위' />
              <Accordion.Panel>
                <FilterSection type='range'>
                  {LICENSE_ITEMS.map((item) => (
                    <AllowedRangeChip
                      key={item.id}
                      isSelected={filters[item.id]}
                      onClick={() => onToggleFilter(item.id as FilterKey)}
                      label={item.label}
                    />
                  ))}
                </FilterSection>
              </Accordion.Panel>
            </Accordion.Container>
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default SidePanel;
