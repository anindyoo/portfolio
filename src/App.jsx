import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Main from './layouts/Main';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/Projects/ProjectDetail';
import NotFound from './pages/NotFound/NotFound';
import Experiences from './pages/Experiences/Experiences';
import About from './pages/About/About';

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
    <div className="
    APP
    relative
    min-h-screen
    box-border bg-stone-400"
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
