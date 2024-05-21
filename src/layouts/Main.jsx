import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScreenFrame from '../components/ScreenFrame/ScreenFrame';

const Main = (props) => {
  const { withNavbar } = props;
  return (
    <>
      <ScreenFrame />
      {withNavbar && (
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
      <Footer />
    </>
  );
};

export default Main;
