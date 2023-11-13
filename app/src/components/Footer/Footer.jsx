import './footer.scss'
import { ReactComponent as Twitter } from '../../Assets/twitter.svg'
import { ReactComponent as Instagram } from '../../Assets/instagram.svg'
import { ReactComponent as Facebook } from '../../Assets/facebook.svg'

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="info">
        <h2 className="title">Sip, Savor, Smile. <span className="italic">It’s coffee time!</span></h2>
        <div className="socials">
          <a href="https://www.twitter.com" target="_blank" className="social" rel="noreferrer"><Twitter className="socialPic" /></a>
          <a href="https://www.instagram.com" target="_blank" className="social" rel="noreferrer"><Instagram className="socialPic" /></a>
          <a href="https://www.facebook.com" target="_blank" className="social" rel="noreferrer"><Facebook className="socialPic" /></a>
        </div>
      </div>
      <div className="contact">
        <h3 className="subtitle">Contact us</h3>
        <a href="https://maps.app.goo.gl/VRvQsPsmSfdecj946" target="_blank" className="item adress" rel="noreferrer">8558 Green Rd., LA</a>
        <a href="tel:+16035550123" className="item tel">+1 (603) 555-0123</a>
        <p className="item time">Mon-Sat: 9:00 AM – 23:00 PM</p>
      </div>
    </footer>
  )
}

export default Footer