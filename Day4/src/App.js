import React from 'react';
import './App.css';

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('You had clicked a Link.');
  }
  return (
    <a href="https://learn.codegym.vn/courses/reactjs" onClick={handleClick}>
      Click_Me
    </a>
  );
}

export default App;
