import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/app';
import { ErrorBoundry } from './components/error-boundry';
import { DataService, DataServiceProvider } from './services';

import store from './store';

const dataService = new DataService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <DataServiceProvider value={dataService}>
        <App />
      </DataServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
