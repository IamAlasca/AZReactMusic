import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import '@/App.css';
import AZAppHeader from './components/app-header';
import AZAppFooter from './components/app-footer';
import routes from './router';


function App() {
  return (
    <HashRouter>
      <AZAppHeader/>
      {renderRoutes(routes)}
      <AZAppFooter/>
    </HashRouter>
  );
}

export default App;
