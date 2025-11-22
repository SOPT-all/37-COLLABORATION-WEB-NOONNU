import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from '@/shared/components/header/header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<>로딩중..</>}>
        <Outlet />
      </Suspense>
      {/* footer */}
    </div>
  );
};

export default Layout;
