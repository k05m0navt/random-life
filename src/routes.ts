import { LazyExoticComponent, FC, lazy } from 'react';

type Route = {
  path: string;
  page: LazyExoticComponent<FC>;
};

export const routes: Route[] = [
  {
    path: '/',
    page: lazy(() => import('./pages/HomePage/HomePage')),
  },
  {
    path: '*',
    page: lazy(() => import('./pages/NotFoundPage/NotFoundPage')),
  },
];
