import { useState, useEffect } from 'react';

import './modal.scss';
import { sizes, additives, drinks } from './data'

const Modal = ({ active, setActive, typeProduct, product }) => {
  const { img, name, description, costValue } = product;
  const [size, setSize] = useState('small');
  const [add, setAdd] = useState([]);
  const [sizeCost, setSizeCost] = useState(costValue);
  const [additivesCost, setAdditivesCost] = useState(0);
  const products = drinks.includes(typeProduct) ? sizes.drinks : sizes[typeProduct];

  const total = `$${(sizeCost + additivesCost).toFixed(2)}`;

  const getCost = (size) => {
    if (size === 'small') return costValue;
    if (size === 'medium') return costValue + 0.5;
    if (size === 'large') return costValue + 1
  }

  const getAdd = (item) => {
    const copy = [...add];

    if (copy.includes(item)) {
      const filtered = copy.filter(elem => elem !== item);
      setAdd(filtered);
      setAdditivesCost(additivesCost - 0.5);
    } else {
      copy.push(item);
      setAdd(copy);
      setAdditivesCost(additivesCost + 0.5);
    }
  }

  const handleModalClose = () => {
    setActive(false)
    setSize('small')
    setSizeCost(costValue)
    setAdditivesCost(0)
    setAdd([])
  }

  useEffect(() => {
    setSizeCost(costValue)
  }, [costValue])

  return (
    <div
      className={active ? 'overlay active' : 'overlay'}
      onClick={handleModalClose}>
      <div
        className={active ? 'modal active' : 'modal'}
        onClick={(e) => e.stopPropagation()}>
        <img src={img} alt="product" className="pic" />
        <div className="details">
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
          <p className="size_title">Size</p>
          <div className="size_choice">
            {products.map((item, index) => {
              return (
                <button
                  className={`filter size ${item.size} ${size === item.size ? 'filter_active' : ''
                    }`}
                  key={index}
                  onClick={() => {
                    setSize(item.size)
                    setSizeCost(getCost(item.size))
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
                  className={`filter add ${add.includes(item) ? 'filter_active' : ''} `}
                  key={index}
                  onClick={() => {
                    getAdd(item)
                  }}
                >
                  {item}
                </button>
              )
            })}
          </div>
          <div className="total_container">
            <div className="total">Total:</div>
            <div className="sum">{total}</div>
          </div>
          <p className="warning">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          <button
            className="close"
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal