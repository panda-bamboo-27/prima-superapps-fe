import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
import routes from "@/app/routes";


function App () {
  return (
      <Router>
        <Routes>

          {/* render guest route */}
          routes.guest.map((route))

          {/* render authenticated user route */}
          {
            routes.map((route) => {
              if (route.children.length > 0) {

                const child_route = route.children.map((child) => {
                  return (
                    child.is_index ? <Route element={<route.element />}/> : <Route path={child.path} element={<route.element />}/>
                  )
                });

                return (
                <Route path={route.path} element={<route.element />} >
                  {child_route}
                </Route>
              )
              } else {
                return (
                  <Route path={route.path} element={<route.element />} />
                )
              }
            })
          }
          {/* <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path='/login' element={ <LoginPage />} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
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