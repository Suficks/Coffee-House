import { Link } from 'react-router-dom';
import './header.scss';

import { ReactComponent as Logo } from '../../Assets/logo.svg';

const Header = ({ location }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

  return (
    <header className="header">
      <Link to="/">
        <Logo className="logo" alt="logo" />
      </Link>
      <nav className="nav">
        <ul className="list">
          <li className="item" onClick={() => scrollToSection('favorite')}>Favorite coffee</li>
          <li className="item" onClick={() => scrollToSection('about')}>About</li>
          <li className="item" onClick={() => scrollToSection('mobile')}>Mobile app</li>
          <li className="item" onClick={() => scrollToSection('contact')}>Contact us</li>
        </ul>
      </nav>
      <Link to="/menu" className={`menuLink ${location === '/menu' ? 'menuLinkActive' : ''}`}>Menu</Link>
    </header>
  )
}

export default Header