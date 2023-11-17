const MenuItem = ({ setActive, cards, setProduct }) => {
  return cards.map((option, index) => {
    const { img, name, description, costLabel } = option;

    return (
      <div className="menuItem" key={index}>
        <div className="wrap" onClick={() => {
          setActive(true)
          setProduct(option)
        }}>
          <img src={img} alt="product" className="itemPic" />
        </div>
        <div className="info">
          <h3 className="name">{name}</h3>
          <p className="description">{description}</p>
          <p className="cost">{costLabel}</p>
        </div>
      </div>
    )
  }
  )
}

export default MenuItem;