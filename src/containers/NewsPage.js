import React from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const AppBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f7e8;
  height: 100vh;
`;

function NewsPage({ match }) {
  // 카테고리가 없으면 all 선택
  const category = match.params.category || 'all';

  return (
    <AppBlock>
      <Categories />
      <NewsList category={category} />
    </AppBlock>
  );
}

export default NewsPage;
