import './reset.css';

import { type ReactNode } from 'react';

import { themeClass } from './theme.css';

export default function ThemeProvider({
  theme,
  className,
  children,
}: {
  children: ReactNode;
  theme?: string;
  className?: string;
}) {
  return (
    <div className={`${theme ?? themeClass} ${className}`}>{children}</div>
  );
}
