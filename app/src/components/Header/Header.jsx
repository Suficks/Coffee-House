import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import { ReactComponent as Logo } from '../../Assets/logo.svg';
import Burger from '../Burger';

const Header = ({ location }) => {
  const [burgerActive, setBurgerActive] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

  return (
    <header className="header">
      <Link to="/" className="link">
        <Logo className="logo" alt="logo" />
      </Link>
      <nav className={`nav ${burgerActive ? 'nav_active' : ''}`}>
        <ul className="list">
          <li className="item" onClick={() => scrollToSection('favorite')}>Favorite coffee</li>
          <li className="item" onClick={() => scrollToSection('about')}>About</li>
          <li className="item" onClick={() => scrollToSection('mobile')}>Mobile app</li>
          <li className="item" onClick={() => scrollToSection('contact')}>Contact us</li>
        </ul>
      </nav>
      <Link to="/menu" className={`menuLink ${location === '/menu' ? 'menuLinkActive' : ''}`}>Menu</Link>
      <Burger burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </header>
  )
}

export default Header