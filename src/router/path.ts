export const routePath = {
  LAYOUT: '/',
  FREE: '/free',
  STORAGE: '/storage',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
