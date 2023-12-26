import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider } from 'primereact/api';

import Bootstrap_PT from './passthrough/bootstrap';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Bootstrap_PT }} children={undefined}></PrimeReactProvider>
    <App />
  </React.StrictMode>
);