/* 
각 뉴스 정보 
title
description
url
urlToImage : 뉴스 이미지
*/

import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;

  .thumbnail {
    img {
      width: 200px;
      height: 140px;
    }
  }

  .contents {
    a {
      text-decoration: none;
      color: #000000;
    }
    h2 {
      width: 200px;
      font-size: 1rem;
    }
  }
`;
function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url}>
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url}>{title}</a>
        </h2>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
