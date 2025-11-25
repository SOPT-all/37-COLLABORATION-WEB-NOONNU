import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Footer from '@/shared/components/footer/footer';
import Header from '@/shared/components/header/header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<>로딩중..</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
