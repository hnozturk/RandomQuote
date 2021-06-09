import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState();

  const getData = async () => fetch(`/api/random`).then((res) => res.json());

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

