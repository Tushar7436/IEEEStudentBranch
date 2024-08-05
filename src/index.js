import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { FTG } from "./pages/FTGPage";
import { FTGChannels } from './components/FTGChannels';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/FTG',
    element: <FTG />,
  },
  {
    path: '/FTGChannels',
    element: <FTGChannels />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null,
    React.createElement(RouterProvider, { router: router })
  )
);
