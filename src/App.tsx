import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from 'components/login/Login';
import ReactLogin from 'components/login/ReactLogin';

const App = () => {
  const theme = {
    color: {
      main: '#682A7D',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Login /> {/* HTML + CSS 버전 */}
        <ReactLogin /> {/* React + Styled-component 버전 */}
      </div>
    </ThemeProvider>
  );
};

export default App;
