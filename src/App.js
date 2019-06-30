import React from 'react';

import Router from './Router';

// higher order component: Provider
// enhance outro component

// cria application state
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//const store = createStoreWithMiddleware(reducers);
console.disableYellowBox = true;
const App = () => {
  return (
   //<Provider store={store}>
    
      <Router />
  //  </Provider>
  );
};

export default App;