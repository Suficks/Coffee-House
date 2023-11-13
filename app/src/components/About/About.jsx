import './about.scss'
import About1 from '../../Assets/about-pic-1.png'
import About2 from '../../Assets/about-pic-2.png'
import About3 from '../../Assets/about-pic-3.png'
import About4 from '../../Assets/about-pic-4.png'

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">Resource is <span className="italic">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.</h2>
      <div className="container">
        <div className="box">
          <div className="wrap">
            <img src={About1} className="aboutPic" alt="aboutPic" />
          </div>
          <div className="wrap">
            <img src={About2} className="aboutPic small" alt="aboutPic" />
          </div>
        </div>
        <div className="box">
          <div className="wrap">
            <img src={About3} className="aboutPic small" alt="aboutPic" />
          </div>
          <div className="wrap">
            <img src={About4} className="aboutPic" alt="aboutPic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About