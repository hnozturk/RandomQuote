import { useEffect, useState } from "react";

function App() {
  const [greeting, setGreeting] = useState();

  useEffect(() => {
    fetch("http://localhost:3333/api")
      .then((res) => res.json())
      .then((data) => setGreeting(data));
  }, []);

  return <div className="App">{greeting?.message} from client</div>;
}

export default App;
