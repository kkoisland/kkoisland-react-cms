import React from 'react';
// import { useNavigate } from 'react-router-dom';

import blogTitle from '../../data/blogTitle.json';

import './YearList.scss';

interface YearListProps {
  year: string;
}

const YearList = ({ year }: YearListProps) => {
  // const navigate = useNavigate();
  const filteredArticles = blogTitle.filter((blog) => {
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
      <h2 style={{ textAlign: 'center' }}> {year}年の記事一覧</h2>
      <div className="card-container">
        {filteredArticles.map((blogDate) => (
          <div key={blogDate.id} onClick={() => handleLinkClick(blogDate)} className="card">
            <span className="card-date">
              {blogDate.year}/{blogDate.month}/{blogDate.date}
            </span>
            <h3>{blogDate.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default YearList;
