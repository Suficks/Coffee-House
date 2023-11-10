import { useState } from 'react'
import './App.scss';
import Header from './Header'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert('kf kf magic')
  }

  return (
    <div className="App">
      {count > 5 && (
        <Header count={count} isTop={true} />
      )}
      <button onClick={() => setCount(count + 1)}>
        увеличить
      </button>
      <button onClick={() => setCount(count - 1)}>
        уменьшить
      </button>
    </div>
  );
}

export default App;
