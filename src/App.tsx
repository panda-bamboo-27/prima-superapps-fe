import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import routes, {RouteItem, RouteObject} from "@/app/routes";
import React from "react";

function renderRoute(routes: RouteObject) {
  if (routes == null) return null;

  for (const key in routes) {
    if (routes.hasOwnProperty(key)) { // Ensure the key is an own property
      const routePaths = routes[key];
      routePaths.map((route: RouteItem) => {
        if (route.is_index) {
          return (<Route element={route.element}></Route>)
        }

        return (
          <Route path={route.path} element={route.element}>
            { renderRoute(route.children) }
          </Route>
        )
      });
    }
  }
}

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          {renderRoute(routes)}
        </Routes>
      </Router>
  )
}

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
export default App