import React, { useState, useCallback } from 'react';
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
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <AppBlock>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </AppBlock>
  );
}

export default App;
