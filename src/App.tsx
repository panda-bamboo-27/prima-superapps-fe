import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes, { RouteItem, RouteObject } from '@/app/routes';
import LandingPage from '@/pages/landing-page';
import React from 'react';

const renderRoute = (routes: RouteObject) => {
  const elements = Object.keys(routes).map((key, index) => {
    const routeGroup = routes[key].map((route, index) => {
      if (route.is_index) {
        return (
          <Route index element={route.element}>
            {Object.keys(route.children).length > 0 && renderRoute(route.children)}
          </Route>
        );
      }

      return (
        <Route path={route.path} element={route.element}>
          {Object.keys(route.children).length > 0 && renderRoute(route.children)}
        </Route>
      );
    });

    return routeGroup;
  });

  return <>{elements}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {renderRoute(routes)}
        <Route path='*' element={<p>Path not resolved</p>} />
      </Routes>
    </Router>
  );
};

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

*/
export default App;
