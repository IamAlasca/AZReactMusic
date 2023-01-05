import React from 'react';
import { HashRouter } from 'react-router-dom';
import '@/App.css';
import AZAppHeader from './components/app-header';
import AZAppFooter from './components/app-footer';
import routes from '../router';


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
