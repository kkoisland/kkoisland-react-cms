import React from 'react';
//later import { useNavigate } from 'react-router-dom';

import blogData from '../../data/blogData.json';

import './YearList.scss';

// const dummyBlogData = [
//   {
//     id: 1,
//     year: '2018',
//     month: '12',
//     date: '01',
//     title: 'ダミー記事1',
//     image: '2018/062.jpg',
//   },
//   {
//     id: 2,
//     year: '2018',
//     month: '12',
//     date: '02',
//     title: 'ダミー記事2',
//     image: '2018/051.jpg',
//   },
//   {
//     id: 3,
//     year: '2018',
//     month: '11',
//     date: '15',
//     title: 'ダミー記事3ダミー記事3ダミー記事3ダミー記事3',
//     image: '2018/047.jpg',
//   },
// ];
interface YearListProps {
  year: string;
}

const YearList = ({ year }: YearListProps) => {
  //later const navigate = useNavigate();
  // const filteredArticles = dummyBlogData.filter((blog) => {
  const filteredArticles = blogData.filter((blog) => {
    return blog.year === year;
  });

  const handleLinkClick = (blogDate: any) => {
    const detailPageUrl = `/blog/${blogDate.year}/${blogDate.month}/${blogDate.date}/index.html`;
    window.location.href = detailPageUrl;
    //later navigateを使えるようにするには、バックエンドから url をとってくる必要があるっぽい(?)
    //later const detailPageUrl = `/blog/${blogDate.year}/${blogDate.month}/${blogDate.date}/`;
    //later navigate(detailPageUrl);
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
            {blogDate.image && blogDate.image !== 'noimage' && (
              <img
                src={`/bimages/${blogDate.image}`}
                width="200"
                height="150"
                alt={blogDate.title}
              />
            )}
            {blogDate.image === 'noimage' && (
              <div className="no-image no-image-gradient-text">no image</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default YearList;
