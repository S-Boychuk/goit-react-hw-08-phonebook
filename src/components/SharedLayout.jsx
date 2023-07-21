import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div className="backdrop"></div>}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default SharedLayout;
