export const TOGGLE = {
  GRID: 'grid',
  LIST: 'list',
  WORD: 'word',
} as const;

export type LayoutToggleType = (typeof TOGGLE)[keyof typeof TOGGLE];
