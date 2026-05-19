import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className="App">
          <Home />
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
