import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Navbar} from './components/Navbar/Navbar';

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Button /> 
    </div>
  );
}

export default App;
