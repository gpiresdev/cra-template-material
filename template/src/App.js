import React from 'react';

import ThemeProvider from './context/ThemeProvider';

import Routes from './routes';

const App = () => (
  <>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </>
);

export default App;
