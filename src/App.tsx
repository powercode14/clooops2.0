import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactSignIn from 'pages/signin';
import { GlobalStyle } from 'Styled/Global';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const theme = {
    color: {
      main: '#682A7D',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ReactSignIn />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
