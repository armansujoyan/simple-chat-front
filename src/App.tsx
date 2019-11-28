import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import getStore from './redux/store';
import Root from './components/Root';
import { history } from './utils';

const store: Store = getStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Root/>
      </Router>
    </Provider>
  );
}

export default App;
