import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      <div className="header-top">
        <div onClick={() => navigate('/')}>KKoisland Header</div>
        <div className="icon-style-div">
          <a href="https://github.com/kkoisland" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="iconStyle" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/keiko-higuchi-b554449/"
            target="_blank"
            // className="iconStyle"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="iconStyle" icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/kkoisland"
            target="_blank"
            // className="iconStyle"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="iconStyle" icon={faTwitter} />
          </a>
        </div>
      </div>
      <nav>
        <ul className="year-list-item">
          {years.map((year) => (
            <Link to={`/${year}`} key={year}>
              {year}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
