import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>CareerHub</h2>
          <p>
            CareerHub is a mini job portal application that helps users
            discover job opportunities from various companies.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#job-list">Jobs</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: careerhub@email.com</p>
          <p>Phone: +62 812-3456-7890</p>
          <p>Indonesia</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CareerHub | Developed by Aprilliyanti</p>
      </div>
    </footer>
  );
};

export default Footer;