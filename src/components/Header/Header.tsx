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
    // 'English',
  ];

  return (
    <header>
      <div className="header-top">
        <div onClick={() => navigate('/')} className="header-kkoisland">
          kkoisland
        </div>
        <div className="icon-style-div">
          <a
            href="https://github.com/kkoisland"
            className="icon-style"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/keiko-higuchi-b554449/"
            target="_blank"
            className="icon-style"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/kkoisland"
            target="_blank"
            className="icon-style"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
      <nav>
        <ul className="year-list-item">
          {years.map((year) => {
            if (year === '2004以前') {
              return (
                <a href="/diary/d_sanjose.html" key={year}>
                  {year}
                </a>
              );
            }
            // else if (year === 'English') {
            //   return (
            //     <a href="/english.html" key={year}>
            //       {year}
            //     </a>
            //   );
            // }
            return (
              <Link to={`/${year}`} key={year}>
                {year}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
