import { createContext, useContext, useState, type ReactNode } from 'react';

import { ArrowDownSmIcon, ArrowUpSmIcon } from '@/shared/icons';

import * as styles from './accordion.css';

interface AccordionContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      'Accordion.* 컴포넌트는 반드시 <Accordion> 내부에서 사용해야 합니다.',
    );
  }

  return context;
};

interface AccordionProviderProps {
  children: ReactNode;
}

const AccordionProvider = ({ children }: AccordionProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

const Container = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};

interface AccordionHeaderProps {
  subtitle: string;
}

const Header = ({ subtitle }: AccordionHeaderProps) => {
  const { isOpen, toggle } = useAccordionContext();

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
  const { isOpen } = useAccordionContext();

  return (
    <div
      className={isOpen ? styles.filterSet : styles.filterSetHidden}
      aria-hidden={!isOpen}
    >
      {children}
    </div>
  );
};

const Accordion = Object.assign(AccordionProvider, {
  Container,
  Header,
  Panel,
});

export default Accordion;
