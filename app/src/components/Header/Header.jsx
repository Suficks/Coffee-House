import 'Header.scss'
import logo from ''

const Header = () => {
  return (
    <div className="header__wrapper">
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

export default Header