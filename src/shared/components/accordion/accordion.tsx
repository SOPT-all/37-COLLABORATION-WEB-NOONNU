import { createContext, useContext, useState, type ReactNode } from 'react';
import * as styles from './accordion.css';
import { ArrowUpSmIcon, ArrowDownSmIcon } from '@/shared/icons';

interface AccordionContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  children: ReactNode;
}

const AccordionRoot = ({ children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <section className={styles.container}>
      <AccordionContext.Provider value={{ isOpen, toggle }}>
        {children}
      </AccordionContext.Provider>
    </section>
  );
};

interface AccordionHeaderProps {
  subtitle: string;
}

const Header = ({ subtitle }: AccordionHeaderProps) => {
  const context = useContext(AccordionContext);
  const { isOpen, toggle } = context!;

  return (
    <div className={styles.header}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <button
        type='button'
        className={styles.toggleButton}
        onClick={toggle}
        aria-label={isOpen ? '섹션 접기' : '섹션 펼치기'}
      >
        {isOpen ? <ArrowUpSmIcon /> : <ArrowDownSmIcon />}
      </button>
    </div>
  );
};

interface AccordionPanelProps {
  children: ReactNode;
}

const Panel = ({ children }: AccordionPanelProps) => {
  const context = useContext(AccordionContext);
  const { isOpen } = context!;

  return (
    <div
      className={isOpen ? styles.filterSet : styles.filterSetHidden}
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  );
};

const Accordion = Object.assign(AccordionRoot, {
  Header,
  Panel,
});

export default Accordion;
