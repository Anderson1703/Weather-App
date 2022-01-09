import React, { useEffect, useState } from "react";
import useWeatherData from "../hooks/useWeatherData";
import City from "./City";
import "../index.css";
import ContentLoading from "./ContentLoading";
import Error from "./Error";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const { searchCity, searchYourCity, weatherInfo, loading } = useWeatherData();

  useEffect(() => {
    city !== "" ? searchCity(city) : searchYourCity();
  }, [city]);

  return (
    <div className="SearchCitySeccion">
      
      <div className="SearchCitySeccion_searchvar">
        <input
          placeholder="Search City"
          onChange={(e) => setCity(e.target.value)}
          type="text"
        />
      </div>

      <div className="SearchCitySeccion_content">
        {loading ? (
          <ContentLoading/>
        ) : weatherInfo !== null ? (
          <City weatherData={weatherInfo} />
        ) : (
          <Error/>
        )}
      </div>
    </div>
  );
}
