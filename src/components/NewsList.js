/* API를 요청하고 뉴스데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링하는 컴포넌트 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;

  width: 768px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=b540785b10d44283a7805f8e87785008',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
