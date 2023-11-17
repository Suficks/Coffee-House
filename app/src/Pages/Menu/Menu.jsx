import { useState, useRef, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import useMedia from '../../Hooks/useMedia';
import './menu.scss';

import MenuItem from './MenuItem';
import Modal from './Modal';
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
  const [modalActive, setModalActive] = useState(false);
  const [product, setProduct] = useState({});
  const [showMore, setShowMore] = useState(false);
  const nodeRef = useRef();

  const isMobile = useMedia('(max-width: 768px)');
  const isShowMore = isMobile === false && showMore === false;

  useEffect(() => {
    modalActive ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [modalActive]);

  return (
    <main className="menu">
      <h2 className="title">Behind each of our cups hides an <span className="italic">amazing surprise</span></h2>
      <div className="filter_container">
        <button
          className={`filter coffee ${typeProduct === 'coffee' ? 'filter_active' : null}`}
          onClick={() => setTypeProduct('coffee')}
        >
          Coffee
        </button>
        <button
          className={`filter tea ${typeProduct === 'tea' ? 'filter_active' : null}`}
          onClick={() => setTypeProduct('tea')}
        >
          Tea
        </button>
        <button
          className={`filter dessert ${typeProduct === 'dessert' ? 'filter_active' : null}`}
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
            <MenuItem setActive={setModalActive} typeProduct={productsMap[typeProduct]} setProduct={setProduct} />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <button className={isShowMore ? 'show_more' : 'show_more show_more_active'} onClick={() => setShowMore(true)}></button>
      <Modal active={modalActive} setActive={setModalActive} typeProduct={typeProduct} product={product} />
    </main>
  )
}

export default Menu