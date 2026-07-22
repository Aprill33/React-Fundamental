import logo from '../assets/careerhub.png';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="CareerHub Logo" className="logo" />
        
        <div>
          <h1>CareerHub</h1>
          <p>Find Your Dream Job</p>
        </div>
      </div>
    </header>
  );
};

export default Header;