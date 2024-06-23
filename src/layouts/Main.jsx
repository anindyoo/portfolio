import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Main = (props) => {
  const {
    noNavbar,
    noFooter,
  } = props;

  return (
    <>
      {!noNavbar && (
        <header>
          <Navbar />
        </header>
      )}
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
