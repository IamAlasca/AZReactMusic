import React from 'react';
import '@/App.css';
import AZAppHeader from './components/app-header';
import AZAppFooter from './components/app-footer';

function App() {
  return (
    <div>
      <AZAppHeader/>
      <h2>App</h2>
      <AZAppFooter/>
    </div>
  );
}

export default App;
