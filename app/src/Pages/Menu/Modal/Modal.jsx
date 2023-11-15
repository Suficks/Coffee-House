import './modal.scss';
import Filter from '../../../Components/UI/Filter';

const sizes = {
  coffee: ['200 ml', '300 ml', '400 ml'],
  tea: ['200 ml', '300 ml', '400 ml'],
  dessert: ['50 g', '100 g', '200 g'],
}

const additives = {
  coffee: ['Sugar', 'Cinnamon', 'Syrup'],
  tea: ['Sugar', 'Lemon', 'Syrup'],
  dessert: ['Berries', 'Nuts', 'Jam'],
}

const Modal = ({ active, setActive, typeProduct, item }) => {
  const { img, name, description, cost } = item;

  return (
    <div className={active ? 'overlay active' : 'overlay'} onClick={() => setActive(false)}>
      <div className={active ? 'modal active' : 'modal'} onClick={(e) => e.stopPropagation()}>
        <img src={img} alt="product" className="pic" />
        <div className="details">
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
          <p className="size_title">Size</p>
          <div className="size_choice">
            {sizes[typeProduct].map((item, index) => {
              return <Filter className="filter size" key={index}>{item}</Filter>
            })}
          </div>
          <p className="size_title">Additives</p>
          <div className="size_choice">
            {additives[typeProduct].map((item, index) => {
              return <Filter className="filter add" key={index}>{item}</Filter>
            })}
          </div>
          <div className="total_container">
            <div className="total">Total:</div>
            <div className="sum">{cost}</div>
          </div>
          <p className="warning">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          <button className="close" onClick={() => setActive(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal