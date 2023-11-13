import './app.scss';
import Header from '../Components/Header'
import Enjoy from '../Components/Enjoy';
import Favorite from '../Components/Favorite';
import About from '../Components/About';
import Mobile from '../Components/Mobile';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Enjoy />
      <Favorite />
      <About />
      <Mobile />
    </div>
  );
}

export default App;
