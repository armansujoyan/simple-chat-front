import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import getStore from './redux/store';
import Root from './components/Root';

const store: Store = getStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Root/>
      </Router>
    </Provider>
  );
}

export default App;
