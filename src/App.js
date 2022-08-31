import React from 'react';
import './App.css';
import HeaderContainer from './Containers/HeaderContainer'
import HomeContainers from './Containers/HomeContainers';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
     <HomeContainers/>
    </div>
  );
}

export default App;
