import { useContext } from 'react';
import Background from './components/background';
import Layout from './components/layout';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <Layout />
      <Background />
    </>
  );
}

export default App;
