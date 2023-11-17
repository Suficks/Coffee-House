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

const CARDS_SHOW_COUNT = 2;

const Menu = () => {
  const [typeProduct, setTypeProduct] = useState('coffee');
  const [modalActive, setModalActive] = useState(false);
  const [product, setProduct] = useState({});
  const cards = productsMap[typeProduct];
  const [cardsPart, setCardsPart] = useState(cards.slice(0, CARDS_SHOW_COUNT));
  const nodeRef = useRef();
  const isMobile = useMedia('(max-width: 768px)');
  const isShowMore = isMobile && cardsPart.length < cards.length;

  const handleShowMore = () => {
    const start = cardsPart.length;
    const end = start + CARDS_SHOW_COUNT;
    const newElements = cards.slice(start, end)
    setCardsPart(prev => ([...prev, ...newElements]))
  }

  const handleChoice = (selectedProduct) => {
    const initialCards = productsMap[selectedProduct].slice(0, CARDS_SHOW_COUNT);

    setTypeProduct(selectedProduct);
    if (selectedProduct !== typeProduct) setCardsPart(initialCards)
  }

  useEffect(() => {
    modalActive ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [modalActive]);

  useEffect(() => {
    if (!isMobile) setCardsPart(cards);
    else setCardsPart(cards.slice(0, CARDS_SHOW_COUNT))
  }, [isMobile, cards]);

  return (
    <main className="menu">
      <h2 className="title">Behind each of our cups hides an <span className="italic">amazing surprise</span></h2>
      <div className="filter_container">
        {Object.keys(productsMap).map((item, index) => (
          <button
            className={`filter ${item} ${typeProduct === item ? 'filter_active' : null}`}
            key={index}
            onClick={() => handleChoice(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          timeout={600}
          key={typeProduct}
          nodeRef={nodeRef}
        >
          <div className="container" ref={nodeRef}>
            <MenuItem
              setActive={setModalActive}
              cards={cardsPart}
              setProduct={setProduct}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <button
        className={isShowMore ? 'show_more' : 'show_more_hide'}
        onClick={handleShowMore}
      />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        typeProduct={typeProduct}
        product={product}
      />
    </main>
  )
}

export default Menu