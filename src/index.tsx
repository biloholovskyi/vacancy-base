import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';
import './app/styles/index.css';
import {StoreProvider} from "./app/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
