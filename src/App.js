import { useState, useEffect } from "react";
import "./App.css";
import DetailsPage from "./components/DetailsPage";

function App() {
  const [country, setCountry] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [state, setState] = useState([]);

  const Country = () => {
    fetch("http://countriesnow.space/api/v0.1/countries/iso")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountry(data.data);
      });
  };

  const Currency = () => {
    fetch("https://countriesnow.space/api/v0.1/countries/currency")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrency(data.data);
      });
  };

  const State = () => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data.data);
      });
  };

  useEffect(() => {
    Country();
    Currency();
    State();
  }, []);

  return (
    <div className="App">
      <DetailsPage country={country} currency={currency} state={state} />
    </div>
  );
}

export default App;
