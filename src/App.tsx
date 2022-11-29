import './App.css';

import {
  createReactRouter,
  createRouteConfig,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';

import BookList from './books/list';
import About from './misc/About';
import NotFound from './misc/NotFound';

const rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: BookList,
});

const aboutRoute = rootRoute.createRoute({
  path: '/about',
  component: About,
});

const NotFoundRoute = rootRoute.createRoute({
  path: '*',
  component: NotFound,
});
const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute, NotFoundRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <nav>
          <router.Link to="/">Home</router.Link>
          <router.Link to="/about">About</router.Link>
        </nav>
        <Outlet />
      </RouterProvider>
    </div>
  );
}

export default App;
