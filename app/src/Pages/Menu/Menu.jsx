import './menu.scss';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import { coffeeData } from './Data/coffee';
import { teaData } from './Data/tea';
import { dessertData } from './Data/desserts';

const products = {
  coffee: coffeeData,
  tea: teaData,
  dessert: dessertData,
}

const Menu = () => {
  const [typeProduct, setTypeProduct] = useState('coffee');

  return (
    <main className="menu">
      <h2 className="title">Behind each of our cups hides an <span className="italic">amazing surprise</span></h2>
      <div className="filter_container">
        <button
          className={`filter coffee ${typeProduct === 'coffee' ? 'active' : null}`}
          onClick={() => setTypeProduct('coffee')}
        >
          Coffee
        </button>
        <button
          className={`filter tea ${typeProduct === 'tea' ? 'active' : null}`}
          onClick={() => setTypeProduct('tea')}
        >
          Tea
        </button>
        <button
          className={`filter dessert ${typeProduct === 'dessert' ? 'active' : null}`}
          onClick={() => setTypeProduct('dessert')}
        >
          Dessert
        </button>
      </div>
      <CSSTransition
        classNames="fade"
        timeout={2100}
      >
        <div className="container">
          <MenuItem typeProduct={products[typeProduct]} />
        </div>
      </CSSTransition>
    </main>
  )
}

export default Menu