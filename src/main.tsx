import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Music from './pages/Music.tsx';
import Films from './pages/Films.tsx';
import Songwriting from './pages/Songwriting.tsx';
import Contact from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/music',
        element: <Music />,
      },
      {
        path: '/films',
        element: <Films />,
      },
      {
        path: '/songwriting',
        element: <Songwriting />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
