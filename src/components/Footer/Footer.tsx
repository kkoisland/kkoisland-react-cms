import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/kkoisland"
          className="icon-style"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <a
          href="https://www.linkedin.com/in/keiko-higuchi-b554449/"
          target="_blank"
          className="icon-style"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a
          href="https://twitter.com/kkoisland"
          target="_blank"
          className="icon-style"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
      </div>
      <div>© 2018–2023 kkoisland.com</div>
    </footer>
  );
};
export default Footer;
