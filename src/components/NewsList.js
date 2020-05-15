/* API를 요청하고 뉴스데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링하는 컴포넌트 */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  display: flex;
  flex: 1 1 1;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: 5rem;
  width: 768px;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

function NewsList({ category }) {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b540785b10d44283a7805f8e87785008`,
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>Error!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
