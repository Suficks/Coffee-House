import './mobile.scss';
import MobileScreens from '../../../../Assets/mobile-screens.png';
import store from '../../../../Assets/app-store.svg'
import google from '../../../../Assets/google-play.svg'

const Mobile = () => {
  return (
    <section className="mobile" id="app">
      <div className="info">
        <h2 className="title"><span className="italic">Download</span> our apps to start ordering</h2>
        <p className="subtitle">Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are</p>
        <a href="https://www.apple.com/app-store" target="_blank" className="store" rel="noreferrer">
          <img className="storeImg" src={store} alt="store" />
        </a>
        <a href="https://play.google.com/store/apps" target="_blank" className="store google" rel="noreferrer">
          <img className="storeImg" src={google} alt="store" />
        </a>
      </div>
      <img src={MobileScreens} className="screens" alt="screens" />
    </section>
  )
}

export default Mobile