import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './containers/NewsPage';

function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
