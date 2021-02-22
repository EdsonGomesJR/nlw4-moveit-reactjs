import React from 'react';
import  ExperienceBar  from './components/ExperienceBar';
import Routes from './routes';

import GlobalStyle from './styles/global';



const App: React.FC = () => {
  return (
    <>
      <Routes/>
      <GlobalStyle />
  </>
  );
}

export default App;
