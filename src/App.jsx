import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Main from './layouts/Main';
import Projects from './pages/Projects/Projects';
import ProjectDetail from './pages/Projects/ProjectDetail';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Main withNavbar />,
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
      ],
    },
    {
      element: <Main withNavbar={false} />,
      children: [
        {
          path: '/',
          element: <Home />,
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
