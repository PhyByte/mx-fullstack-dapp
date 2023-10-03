
import Layout from '@/layout';
import Home from '@/pages/Home/Home';
import Overview from '@/pages/Overview/Overview';
import PageNotFound from '@/pages/PageNotFound';
import { useRoutes, Navigate } from 'react-router-dom';


export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="home" replace />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "overview",
          element: <Overview />,
        },
        { path: '*', element: <PageNotFound /> },
      ],
    },
  ]);
}
