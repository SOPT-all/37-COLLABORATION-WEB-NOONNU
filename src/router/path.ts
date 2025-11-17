export const routePath = {
  ROOT: '/',
  FREE: '/free',
  STORAGE: '/storage',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
