import React from 'react';
import { useParams } from 'react-router-dom';

const dummyBlogData = [
  {
    id: 1,
    year: '2018',
    month: '12',
    date: '01',
    title: 'ダミー記事1',
    content: 'これはダミーの記事コンテンツです。',
  },
  {
    id: 2,
    year: '2018',
    month: '12',
    date: '02',
    title: 'ダミー記事2',
    content: 'これはダミーの記事コンテンツです。',
  },
  {
    id: 3,
    year: '2017',
    month: '11',
    date: '15',
    title: 'ダミー記事3',
    content: 'これはダミーの記事コンテンツです。',
  },
];

const BlogDetail = () => {
  const { year, month, date } = useParams();

  // ダミーのブログ記事データを取得
  const selectedBlog = dummyBlogData.find((blog) => {
    return blog.year === year && blog.month === month && blog.date === date;
  });

  if (!selectedBlog) {
    return <div>記事が見つかりませんでした。</div>;
  }

  return (
    <div>
      <h1>記事詳細ページ</h1>
      <h1>{selectedBlog.title}</h1>
      <p>{selectedBlog.content}</p>
    </div>
  );
};

export default BlogDetail;
