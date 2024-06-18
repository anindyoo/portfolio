import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Main from './layouts/Main';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/Projects/ProjectDetail';
import NotFound from './pages/NotFound/NotFound';
import Experiences from './pages/Experiences/Experiences';
import About from './pages/About/About';
import ScreenFrame from './components/ScreenFrame/ScreenFrame';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Main />,
      children: [
        {
          path: '*',
          element: <NotFound />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/projects/:projectId',
          element: <ProjectDetail />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
    {
      element: <Main noNavbar />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      element: <Main noFooter />,
      children: [
        {
          path: '/experiences',
          element: <Experiences />,
        },
      ],
    },
  ]);

  return (
    <>
      <ScreenFrame />
      <div className="
      APP-CONTAINER
      w-full overflow-x-hidden"
      >
        <div className="
        APP-CONTENT
        relative
        mx-auto
        w-full max-w-[125rem]
        min-h-screen h-full
        box-border
        text-lightSweetener decoration-lightSweetener"
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
};

export default App;
