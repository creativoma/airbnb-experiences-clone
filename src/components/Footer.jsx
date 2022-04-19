import '../styles/components.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container--left">
          <div className="footer-container--left--logo">
            <img src='../../images/logo.svg' alt="logo" />
          </div>
          <div className="footer-container--left--links">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Policies</a>
            <a href="#">Help</a>
          </div>
        </div>
        <div className="footer-container--right">
          <div className="footer-container--right--social">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
          <div className="footer-container--right--copyright">
            <p>© {new Date().getFullYear()} Airbnb Experiences - Clone</p>
          </div>
        </div>
      </div>
    </footer>
    )
}
