import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [countryName, setCountryName] = useState(0);

  useEffect(() => {
    console.log(countryName);
  }, [countryName]);
  const countryList = [
    {
      country_name: "United States",
      country_code: "US",
      cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    },
    {
      country_name: "Canada",
      country_code: "CA",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    },
    {
      country_name: "United Kingdom",
      country_code: "GB",
      cities: ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
    },
    {
      country_name: "Australia",
      country_code: "AU",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    },
    {
      country_name: "Germany",
      country_code: "DE",
      cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
    },
    {
      country_name: "France",
      country_code: "FR",
      cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
    },
    {
      country_name: "Japan",
      country_code: "JP",
      cities: ["Tokyo", "Osaka", "Kyoto", "Sapporo", "Hiroshima"],
    },
    {
      country_name: "India",
      country_code: "IN",
      cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"],
    },
    {
      country_name: "Brazil",
      country_code: "BR",
      cities: [
        "São Paulo",
        "Rio de Janeiro",
        "Salvador",
        "Brasília",
        "Fortaleza",
      ],
    },
    {
      country_name: "South Africa",
      country_code: "ZA",
      cities: [
        "Cape Town",
        "Johannesburg",
        "Durban",
        "Pretoria",
        "Port Elizabeth",
      ],
    },
  ];

  return (
    <div className="App">
      <select onChange={(e) => setCountryName(e.target.value)}>
        {countryList.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.country_name}
            </option>
          );
        })}
      </select>

      <select>
        {countryList[countryName].cities.map((city) => {
          return <option key={city}>{city}</option>;
        })}
      </select>
    </div>
  );
}
