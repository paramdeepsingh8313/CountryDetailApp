import React, { useEffect, useState } from "react";
import "./DetailsPage.css";

function DetailsPage(props) {
  const [country, setCountry] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    setCountry(props.country);
  }, [props.country]);

  useEffect(() => {
    setCurrency(props.currency);
  }, [props.currency]);

  useEffect(() => {
    setState(props.state);
  }, [props.state]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [iso, setIso] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedState, setSeletedState] = useState([]);

  useEffect(() => {
    const ISO =
      country &&
      country.filter((data) => {
        return data.name === selectedCountry;
      });

    const curr1 =
      currency &&
      currency.filter((cur) => {
        return cur.name === selectedCountry;
      });

    const state1 =
      state &&
      state.filter((data) => {
        return data.name === selectedCountry;
      });

    setIso(ISO[0]?.Iso2);
    setSelectedCurrency(curr1[0]?.currency);
    setSeletedState(state1[0]?.states);
  }, [selectedCountry]);

  console.log("aaaaaaa", selectedState);

  return (
    <div className="detail__page">
      <h1>Country app</h1>
      <select
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
      >
        <option disabled selected>
          Select Country
        </option>
        {country &&
          country.map((coun) => {
            return <option value={coun.name}>{coun.name}</option>;
          })}
      </select>
      <br />
      ISO : <input type="text" value={iso} disabled />
      <br />
      <br />
      Currency : <input type="text" value={selectedCurrency} disabled />
      <br />
      <br />
      <div className="table_css">
        <table>
          <thead>
            <tr>
              <th>State Name</th>
              <th>State Code</th>
            </tr>
          </thead>
          <tbody>
            {selectedState &&
              selectedState.map((data, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data?.name}</td>
                    <td>{data?.state_code}</td>
                  </tr>
                );
              })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsPage;
