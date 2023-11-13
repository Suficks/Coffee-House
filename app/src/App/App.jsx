import './app.scss';
import Header from '../Components/Header'
import Enjoy from '../Components/Enjoy';
import Favorite from '../Components/Favorite';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Enjoy />
      <Favorite />
    </div>
  );
}

export default App;
