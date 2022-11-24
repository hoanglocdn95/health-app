import { Outlet } from 'react-router-dom';

import IconScroll from 'assets/img/icon_scroll.png';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const DefaultLayout = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <div className="scrollTop" onClick={scrollToTop}>
        <img src={IconScroll} alt="Scroll To Top" />
      </div>
    </>
  );
};

export default DefaultLayout;
