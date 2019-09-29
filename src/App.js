import React from 'react';
import './App.css';
import BaseArea from './components/baseArea/BaseArea';
import Constants from './Helpers/Constants';

function App() {
  return (
    <div className="App">
      <BaseArea baseAreaCells={Constants.baseAreaCells} winningPatterns={Constants.winningPatterns}/>
    </div>
  );
}

export default App;
