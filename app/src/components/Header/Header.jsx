import './header.scss'

import { ReactComponent as Logo } from '../../Assets/logo.svg'

const Header = () => {
  return (
    <div className="header__wrapper">
      <a href="#home">
        <Logo className="logo" alt="logo" />
      </a>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <a href="#favorite" className="link">Favorite coffee</a>
          </li>
          <li className="item">
            <a href="#about" className="link">About</a>
          </li>
          <li className="item">
            <a href="#app" className="link">Mobile app</a>
          </li>
          <li className="item">
            <a href="#contact" className="link">Contact us</a>
          </li>
        </ul>
      </nav>
      <button className="button">Menu</button>
    </div>
  )
}

export default Header