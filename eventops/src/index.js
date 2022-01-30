import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './routes/App';
import { SesionProvider } from './utils/SesionContext';

ReactDOM.render(
  <React.StrictMode>
    <SesionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SesionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
