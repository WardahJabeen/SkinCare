import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Navbar from "./Components/Navbar"

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom'

function App() {

  // Router set up version6
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// Router set up version6
const Root = () => {
  return (
    <>
      <div>
        <Navbar />
        {/* <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link> */}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
