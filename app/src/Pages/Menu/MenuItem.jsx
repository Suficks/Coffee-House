const MenuItem = ({ setActive, typeProduct, setItem }) => {

  return typeProduct.map((option, index) => {
    const { img, name, description, cost } = option;

    return (
      <div className="menuItem" key={index}>
        <div className="wrap" onClick={() => {
          setActive(true)
          setItem(option)
        }}>
          <img src={img} alt="product" className="itemPic" />
        </div>
        <div className="info">
          <h3 className="name">{name}</h3>
          <p className="description">{description}</p>
          <p className="cost">{cost}</p>
        </div>
      </div>
    )
  }
  )
}

export default MenuItem;