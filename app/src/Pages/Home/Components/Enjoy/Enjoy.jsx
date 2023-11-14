import './enjoy.scss'
import { Link } from 'react-router-dom';

const Enjoy = () => {
  return (
    <section className="enjoy">
      <div className="text__wrap">
        <h1 className="title"><span className="italic">Enjoy</span> premium coffee at our charming cafe</h1>
        <h2 className="subtitle">With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.</h2>
      </div>
      <Link to="/menu" className="link">Menu</Link>
    </section>
  )
}

export default Enjoy