/* API를 요청하고 뉴스데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링하는 컴포넌트 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

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
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;

        const response = await axios.get(
          `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b540785b10d44283a7805f8e87785008`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>loading...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;
