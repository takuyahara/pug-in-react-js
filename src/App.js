import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

function App() {
  const App = styled.div`
    text-align: center;
  `;
  const AppLogo = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
    
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const AppLink = styled.a`
    color: #61dafb;
  `;
  return pug`
    App
      AppHeader
        AppLogo(
          src=logo
          alt="logo"
        )
        p
          | Edit 
          code src/App.js
          |  and save to reload.

        AppLink(
          href="https://reactjs.org" 
          target="_blank" 
          rel="noopener noreferrer"
        ) Learn React
  `;
}

export default App;
