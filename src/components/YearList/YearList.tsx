import React from 'react';
// import { useNavigate } from 'react-router-dom';

import './YearList.scss';

interface YearListProps {
  year: string;
}

const allBlogs = [
  { id: 1, year: '2018', month: '12', date: '01', title: '記事1', content: '記事1の内容' },
  { id: 2, year: '2018', month: '12', date: '02', title: '記事2', content: '記事2の内容' },
  { id: 3, year: '2017', month: '11', date: '15', title: '記事3', content: '記事3の内容' },
];

const YearList = ({ year }: YearListProps) => {
  // const navigate = useNavigate();
  const filteredArticles = allBlogs.filter((blog) => {
    return blog.year === year;
  });

  const handleLinkClick = (blogDate: any) => {
    const detailPageUrl = `/blog/${blogDate.year}/${blogDate.month}/${blogDate.date}/index.html`;
    window.location.href = detailPageUrl;
    // navigateを使えるようにするには、バックエンドから url をとってくる必要があるっぽい(?)
    // const detailPageUrl = `/blog/${blogDate.year}/${blogDate.month}/${blogDate.date}/`;
    // navigate(detailPageUrl);
  };
  return (
    <div className="year-list-body">
      <h2> {year}年の記事一覧</h2>
      {filteredArticles.map((blogDate) => (
        <div key={blogDate.id} onClick={() => handleLinkClick(blogDate)}>
          <h3>{blogDate.title}</h3>
          <p>{blogDate.content}</p>
        </div>
      ))}
    </div>
  );
};
export default YearList;
