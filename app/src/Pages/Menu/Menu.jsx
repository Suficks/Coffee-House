import './menu.scss';
import { useState } from 'react';
import MenuItem from './MenuItem';
import { coffeeData } from './Data/coffee';
import { teaData } from './Data/tea';
import { dessertData } from './Data/desserts';

const Menu = () => {
  const [typeProduct, setTypeProduct] = useState(coffeeData);

  return (
    <main className="menu">
      <h2 className="title">Behind each of our cups hides an <span className="italic">amazing surprise</span></h2>
      <div className="filter_container">
        <button
          className="filter coffee"
          onClick={() => setTypeProduct(coffeeData)}
        >
          Coffee
        </button>
        <button
          className="filter tea"
          onClick={() => setTypeProduct(teaData)}
        >
          Tea
        </button>
        <button
          className="filter dessert"
          onClick={() => setTypeProduct(dessertData)}
        >
          Dessert
        </button>
      </div>
      <div className="container">
        <MenuItem typeProduct={typeProduct} />
      </div>
    </main>
  )
}

export default Menu