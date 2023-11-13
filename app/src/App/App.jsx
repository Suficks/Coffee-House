import './app.scss';
import Header from '../Components/Header'
import Enjoy from '../Components/Enjoy';
import Favorite from '../Components/Favorite';
import About from '../Components/About';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Enjoy />
      <Favorite />
      <About />
    </div>
  );
}

export default App;
