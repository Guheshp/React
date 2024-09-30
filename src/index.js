import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css'
import UseStateExample from './component/UseStateExample';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import UseState from './component/UseStateExample';
import HomePage from './component/HomePage';
import UseMemo from './component/hooks/UseMemo';
import ImageApi from './component/hooks/ImageApi';


const AppLayout = () => {
  return (
    <div >
      {/* <h1>welome to home page</h1> */}
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/usestate",
        element: <UseState />
      },
      {
        path: "/useMemo",
        element: <UseMemo />
      },
      {
        path: "/imageapi",
        element: <ImageApi />
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);