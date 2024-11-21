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
import Header from './component/Header';
import Fetch from './component/hooks/Fetch';
import SideNavBar from './component/SideNavBar';
import Problems from './component/Problems';
import TrafficLight from './component/TrafficLight';
import CommentProblem from './component/CommentProblem';
import ListProblem from './component/ListProblem';
import Pagination from './component/Pagination';
import Redux from './component/Redux';
import { Provider } from 'react-redux';
import store from './component/redux/appStore';


const AppLayout = () => {
  return (
    <div className=' h-screen w-full'>
      <Header />
      {/* <SideNavBar /> */}
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
      {
        path: "/fetch",
        element: <Fetch />
      },
      {
        path: "/problems",
        element: <Problems />
      },
      {
        path: "/trafficlight",
        element: <TrafficLight />
      },
      {
        path: "/comment",
        element: <CommentProblem />
      },
      {
        path: "/list",
        element: <ListProblem />
      },
      {
        path: "/pagination",
        element: <Pagination />
      },
      {
        path: "/redux",
        element: <Redux />
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);