import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Main from './Main';

const Routes = () => {
  const route = [
    { path: '/', element: <Home /> },
    { path: '/main', element: <Main /> },
  ];

  const routes = useRoutes(route);
  return routes;
};

export default Routes;
