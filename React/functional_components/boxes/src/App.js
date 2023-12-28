import Box from './components/box';
import Display from './components/display';
import './App.css';
import { useState } from 'react';

function App() {
  const[boxColorArray, setBoxColorArray] = useState([]);
  return (
    <div className="App">
      <Box boxColorArray = {boxColorArray} setBoxColorArray = {setBoxColorArray}/>
      <Display boxColorArray = {boxColorArray}/>
    </div>
  );
}

export default App;
