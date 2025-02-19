import { RiLeafLine } from "react-icons/ri";
import "../styles/header.css";

function Header() {
  return (
    <>
      <header className="header-nav">
        <div className="header-nav-logo">
          <a
            className="header-nav-logo-link"
            href="./home"
            aria-label="Greenify Logo"
          >
            <RiLeafLine className="header-nav-logo-icon" />
            GREENIFY
          </a>
        </div>
        <nav className="header-nav-menu">
          <ul className="header-nav-menu-list">
            <li className="header-nav-menu-item">
              <a href="./home" className="header-nav-menu-link">
                Home
              </a>
            </li> 
            <li className="header-nav-menu-item">
              <a href="./home" className="header-nav-menu-link">
                About
              </a>
            </li>
            <li className="header-nav-menu-item">
              <a href="./home" className="header-nav-menu-link">
                Products
              </a>
            </li>
            <li className="header-nav-menu-item">
              <a href="./home" className="header-nav-menu-link">
                F AQs
              </a>
            </li>
            <li className="header-nav-menu-item">
              <a href="./home" className="header-nav-menu-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>{" "}
    </>
  );
}

export default Header;
