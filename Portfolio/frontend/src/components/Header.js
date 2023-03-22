import './header.css';

function Header() {
  return (
    <header>
        <h3 className="header-logo">WiseDream</h3>
        <nav>
            <div className="nav-link">Home</div>
            <div className="nav-link">About</div>
            <div className="nav-link">Projects</div>
            <div className="nav-link">Contact</div>
        </nav>
    </header>
  );
}

export default Header;
