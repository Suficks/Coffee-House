import './app.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';

const App = () => {
  return (
    <div className="wrapper">
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
