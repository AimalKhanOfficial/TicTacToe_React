import React from 'react';
import './App.css';
import BaseArea from './components/baseArea/BaseArea';
import Constant from './Helpers/Constants';

function App() {
  return (
    <div className="App">
      <BaseArea baseAreaCells={Constant.baseAreaCells}/>
    </div>
  );
}

export default App;
