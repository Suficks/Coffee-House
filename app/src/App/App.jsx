import { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './app.scss';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';

const App = () => {
  const location = useLocation();
  const nodeRef = useRef();

  return (
    <div className="wrapper">
      <Header location={location.pathname} />
      <SwitchTransition>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={600}
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </div>
  );
}

export default App;
