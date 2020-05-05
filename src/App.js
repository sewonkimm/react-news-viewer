import React from 'react';
import styled from 'styled-components';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const AppBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f7e8;
  height: 100vh;
`;

function App() {
  return (
    <AppBlock>
      <Categories />
      <NewsList />
    </AppBlock>
  );
}

export default App;
