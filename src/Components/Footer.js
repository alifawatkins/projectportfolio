import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
      <footer>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/alifawatkins" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </div>
      </footer>  
    )
}

export default Footer;