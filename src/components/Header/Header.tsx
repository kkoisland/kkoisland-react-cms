import { useNavigate, Link } from 'react-router-dom';

import React from 'react';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const years = [
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004以前',
  ];

  return (
    <header>
      <h1 onClick={() => navigate('/')}>KKoisland Header</h1>
      <nav>
        <ul className="year-list-item">
          {years.map((year) => (
            // <a href="#">{year}</a>
            <Link to={`/${year}`}>{year}</Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
