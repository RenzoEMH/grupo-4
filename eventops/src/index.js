import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './routes/App';
import { SesionProvider } from './utils/SesionContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SesionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SesionProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
