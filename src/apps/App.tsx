import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';

import { router } from '@/router/router';
import { queryClient } from '@/shared/apis/query-client';
import * as styles from '@/shared/components/toast/toast.css';
import { rootStyle } from '@/shared/styles';
import ThemeProvider from '@/shared/styles/theme-provider';

function App() {
  return (
    <>
      <ThemeProvider className={rootStyle}>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={true}
          closeButton={false}
          toastClassName={styles.toastContainer}
        />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
