import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import useScreenSize from '../hooks/useScreenSize';
import config from '../config/config';

const Main = (props) => {
  const {
    noNavbar,
    noFooter,
  } = props;

  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;
  const laptopBreakpoint = config.screenBreakpoints.laptop;

  return (
    <>
      <header>
        {noNavbar && (screenWidth < laptopBreakpoint) ? (
          <Navbar noLogo />
        ) : <Navbar />}
      </header>
      <main className="
      MAIN-CONTAINER
      px-5 lg:px-7 py-5"
      >
        <Outlet />
      </main>
      {!noFooter && <Footer />}
    </>
  );
};

export default Main;
