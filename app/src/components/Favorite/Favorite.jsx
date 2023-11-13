import './favorite.scss';
import { options } from './data'
import Slider from "react-slick";

const Favorite = () => {
  return (
    <section className="favorite" id="favorite">
      <h1 className="title">Choose your <span className="italic">favorite</span> coffee</h1>
      <div className="slider">
        <Slider
          dots={true}
          infinite={false}
          speed={600}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {options.map((option, index) => {
            const { img, name, description, cost } = option;

            return (
              <div className="sliderItem" key={index}>
                <img src={img} alt="" className="item" />
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <div className="cost">{cost}</div>
              </div>
            )
          }
          )}
        </Slider>
      </div>
    </section >
  )
}

export default Favorite;