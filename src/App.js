import React from 'react';
import './App.css';
import BaseArea from './components/baseArea/BaseArea';

function App() {
  return (
    <div className="App">
      <BaseArea baseAreaCells={[1, 2, 3]}/>
    </div>
  );
}

export default App;
