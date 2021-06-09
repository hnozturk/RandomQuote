import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState();
  const rand = Math.floor(Math.random() * 4);

  const getData = async () =>
    fetch(`/api/${rand}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

  const getRandomQuote = async () => setQuote(await getData());

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{quote?.text}</h1>
        <p>{quote?.author}</p>
      </div>

      <button onClick={getRandomQuote}>Click!</button>
    </div>
  );
}

export default App;
