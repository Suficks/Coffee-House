import { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './menu.scss';

import MenuItem from './MenuItem';
import { coffeeData } from './Data/coffee';
import { teaData } from './Data/tea';
import { dessertData } from './Data/desserts';

const productsMap = {
  coffee: coffeeData,
  tea: teaData,
  dessert: dessertData,
}

const Menu = () => {
  const [typeProduct, setTypeProduct] = useState('coffee');
  const nodeRef = useRef();

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
      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          timeout={600}
          key={typeProduct}
          nodeRef={nodeRef}
        >
          <div className="container" ref={nodeRef}>
            <MenuItem typeProduct={productsMap[typeProduct]} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  )
}

export default Menu