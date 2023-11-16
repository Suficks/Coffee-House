import './burger.scss';

const Burger = ({ burgerActive, setBurgerActive }) => {
  return (
    <div
      className={`burger ${burgerActive ? 'burger_close' : ''}`}
      onClick={() => setBurgerActive(!burgerActive)}>
      <span className="line"></span>
      <span className="line second"></span>
    </div>
  )
}

export default Burger