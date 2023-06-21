import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StoreProvider } from 'easy-peasy';
import { DataStore } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={DataStore}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
