import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Calender from './Components/Calender';
import Today from './Components/Today';
import Notes from './Components/Notes';
import Settings from './Components/Settings';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Calender />
      }, {
        path: '/today',
        element: <Today />
      }, {
        path: '/notes',
        element: <Notes />
      }, {
        path: '/settings',
        element: <Settings />
      }
    ]
  },
], {
  basename: '/'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
