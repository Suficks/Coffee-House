import { useState, useEffect } from 'react';

import './modal.scss';
import { sizes, additives, drinks } from './data'

const Modal = ({ active, setActive, typeProduct, product }) => {
  const [size, setSize] = useState('small');
  const { img, name, description, cost } = product;
  const [productCost, setProductCost] = useState(cost);
  const products = drinks.includes(typeProduct) ? sizes.drinks : sizes[typeProduct];

  useEffect(() => {
    setProductCost(cost)
  }, [cost])

  const setCost = (size) => {
    if (size === 'small') return cost;
    if (size === 'medium') return `$${(parseFloat(cost.replace('$', '')) + 0.5).toFixed(2)}`;
    if (size === 'large') return `$${(parseFloat(cost.replace('$', '')) + 1).toFixed(2)}`;
  }

  return (
    <div className={active ? 'overlay active' : 'overlay'} onClick={() => {
      setActive(false)
      setSize('small')
      setProductCost(cost)
    }}>
      <div className={active ? 'modal active' : 'modal'} onClick={(e) => e.stopPropagation()}>
        <img src={img} alt="product" className="pic" />
        <div className="details">
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
          <p className="size_title">Size</p>
          <div className="size_choice">
            {products.map((item, index) => {
              return (
                <button
                  className={`filter size ${item.size} ${size === item.size ? 'filter_active' : null}`}
                  key={index}
                  onClick={() => {
                    setSize(item.size)
                    setProductCost(setCost(item.size))
                  }}
                >
                  {item.amount}
                </button>
              )
            })}
          </div>
          <p className="size_title">Additives</p>
          <div className="size_choice">
            {additives[typeProduct].map((item, index) => {
              return (
                <button
                  className="filter add"
                  key={index}
                >
                  {item}
                </button>
              )
            })}
          </div>
          <div className="total_container">
            <div className="total">Total:</div>
            <div className="sum">{productCost}</div>
          </div>
          <p className="warning">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          <button
            className="close"
            onClick={() => {
              setActive(false)
              setSize('small')
              setProductCost(cost)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal