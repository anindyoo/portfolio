import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Main from './layouts/Main';
import Projects from './pages/Projects/Projects';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Main withNavbar />,
      children: [
        {
          path: '/projects',
          element: <Projects />,
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
