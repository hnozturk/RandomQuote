import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState();

  const getData = async () =>
    fetch(`http://localhost:3333/api`)
      .then((res) => res.json())
      .then((data) => {
        const rand = Math.floor(Math.random() * data.length);
        return data[rand];
      });

  const getRandomQuote = async () => setQuote(await getData());

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="box">
      <div onClick={getRandomQuote}>
        <h1>{quote?.text}</h1>
        <p>{quote?.author}</p>
      </div>
    </div>
  );
}

export default App;
