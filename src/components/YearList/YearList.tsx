import React from 'react';

import './YearList.scss';

interface YearListProps {
  year: string;
}
const allArticles = [
  { id: 1, year: '2018', title: '記事1', content: '記事1の内容' },
  { id: 2, year: '2018', title: '記事2', content: '記事2の内容' },
  { id: 3, year: '2017', title: '記事3', content: '記事3の内容' },
  // 他の記事データも追加
];

const YearList = ({ year }: YearListProps) => {
  const filteredArticles = allArticles.filter((article) => {
    return article.year === year;
  });

  return (
    <div className="year-list-body">
      <h2> {year}年の記事一覧</h2>
      {filteredArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};
export default YearList;
