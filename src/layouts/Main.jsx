import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScreenFrame from '../components/ScreenFrame/ScreenFrame';

const Main = (props) => {
  const {
    noNavbar,
    noFooter,
  } = props;

  return (
    <>
      <ScreenFrame />
      {!noNavbar && (
        <header>
          <Navbar />
        </header>
      )}
      <main className="
      MAIN-CONTAINER
      px-7 py-5"
      >
        <Outlet />
      </main>
      {!noFooter && <Footer />}
    </>
  );
};

export default Main;
