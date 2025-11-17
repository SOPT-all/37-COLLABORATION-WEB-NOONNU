import { createBrowserRouter, Navigate } from 'react-router';

import FreeFont from '../pages/free-font/free-font';
import Storage from '../pages/storage/storage';
import Layout from './layout';
import { routePath } from './path';

export const router = createBrowserRouter([
  {
    path: routePath.ROOT,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={routePath.FREE} replace />,
      },
      {
        path: routePath.FREE,
        element: <FreeFont />,
      },
      {
        path: routePath.STORAGE,
        element: <Storage />,
      },
    ],
  },
]);
