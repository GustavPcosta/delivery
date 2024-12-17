import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MainRoutes from './MainRoutes/routes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);


