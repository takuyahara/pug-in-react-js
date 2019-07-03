import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return pug`
    div.App
      header.App-header
        img.App-logo(
          src=logo
          alt="logo"
        )
        p
          | Edit 
          code src/App.js
          |  and save to reload.

        a.App-link(
          href="https://reactjs.org" 
          target="_blank" 
          rel="noopener noreferrer"
        ) Learn React
  `;
}

export default App;
