import Enjoy from './Components/Enjoy';
import Favorite from './Components/Favorite';
import About from './Components/About';
import Mobile from './Components/Mobile';

const Home = () => {
  return (
    <main className="home">
      <Enjoy />
      <Favorite />
      <About />
      <Mobile />
    </main>
  )
}

export default Home