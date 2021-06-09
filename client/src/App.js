import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuotes(data);
      });
  }, []);

  return (
    <div className="App">
      {quotes?.map((quote) => (
        <div>
          <h1>{quote.text}</h1>
          <p>{quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
