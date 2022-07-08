import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  function Hello() {
    useEffect(() => {
      console.log('hi :)');
      return () => console.log('bye :(');
    }, []);
    return <h1>Hello</h1>;
  }
  return (
    <div>
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
