import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins! ({coins.length})</h1>
      {loading ? <strong> Loading...</strong> : null}
      <ul>
        {coins.map((coin, i) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) = {coin.quotes.USD.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
