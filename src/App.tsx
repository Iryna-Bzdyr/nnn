import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confetti from "./common/Сonfetti";
import Main from "./components/Main";

function App() {

  return (
    <div className="App">
    <Confetti></Confetti>
      <Main></Main>
    </div>
  );
}

export default App;
