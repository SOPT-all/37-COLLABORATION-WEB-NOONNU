import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<>로딩중..</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
