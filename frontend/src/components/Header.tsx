import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">ISII Logo</div>
        <nav className="header-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#engage" className="nav-link">Engage</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

