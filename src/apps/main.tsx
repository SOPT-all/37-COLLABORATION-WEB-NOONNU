<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
=======
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '../router/router.tsx';
import { queryClient } from '../shared/apis/query-client';
import App from './App.tsx';
>>>>>>> 338e6d1a97421d6345832d0e29b1c79608cec228

createRoot(document.getElementById("root")!).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>
=======
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
>>>>>>> 338e6d1a97421d6345832d0e29b1c79608cec228
);
