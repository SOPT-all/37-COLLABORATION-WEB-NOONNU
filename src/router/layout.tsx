import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Footer from '@/shared/components/footer/footer';

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<>로딩중..</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
