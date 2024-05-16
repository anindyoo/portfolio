/* eslint-disable import/no-extraneous-dependencies */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

/* eslint-disable arrow-body-style */
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return (
    <div className="
    APP
    relative
    box-border bg-stone-400"
    >
      <div className="
      SCREEN-FRAME-CONTAINER
      fixed z-10
      w-full h-screen
      p-3 pointer-events-none"
      >
        <div className="
        SCREEN-FRAME
        h-full
        border border-black box"
        />
      </div>
      <main className="
      MAIN-CONTAINER
      px-7 py-5"
      >
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
