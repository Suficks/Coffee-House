import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import { ReactComponent as Logo } from '../../Assets/logo.svg';
import Burger from '../Burger';

const Header = ({ location }) => {
  const [burgerActive, setBurgerActive] = useState(false);

  window.addEventListener('resize', () => {
    setBurgerActive(false)
  })

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

  useEffect(() => {
    burgerActive ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [burgerActive]);

  return (
    <header className="header">
      <Link to="/" className="link">
        <Logo className="logo" alt="logo" />
      </Link>
      <nav className={`nav ${burgerActive ? 'nav_active' : ''}`}>
        <ul className="list">
          <li
            className="item"
            onClick={() => {
              scrollToSection('favorite')
              setBurgerActive(false)
            }}
          >
            Favorite coffee
          </li>
          <li
            className="item"
            onClick={() => {
              scrollToSection('about')
              setBurgerActive(false)
            }}
          >
            About
          </li>
          <li
            className="item"
            onClick={() => {
              scrollToSection('mobile')
              setBurgerActive(false)
            }}
          >
            Mobile app
          </li>
          <li
            className="item"
            onClick={() => {
              scrollToSection('contact')
              setBurgerActive(false)
            }}
          >
            Contact us
          </li>
        </ul>
      </nav>
      <Link to="/menu"
        className={`menuLink ${location === '/menu' ? 'menuLinkActive' : ''} ${burgerActive ? 'nav_active' : ''}`}
        onClick={() => setBurgerActive(false)}
      >
        Menu
      </Link>
      <Burger burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </header>
  )
}

export default Header