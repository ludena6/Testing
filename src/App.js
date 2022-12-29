import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount]=useState(0);
  const handilecount=()=>{
    setcount(count+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{count}</p>
        <button  onClick={handilecount}>Increment</button>
      </header>
    </div>
  );
}

export default App;
