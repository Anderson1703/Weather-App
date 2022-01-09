import React, {memo} from "react";
import "../index.css";
import Cards from "./Cards";
function City({ weatherData }) {
  return (
    <div>
      {weatherData.cod !== 200 ? (
        <div className="headContentNotFoundOrError">
          <p>City not Found</p>
        </div>
      ) : (
        <div>
          <div className="headContent">
            <h3>{weatherData.name},{weatherData.sys.country}</h3>
            <p>
            {weatherData.wind.deg}° {weatherData.weather[0].description}
            </p>
          </div>
          <div className="fatherContCards">
            <Cards weatherData={weatherData}/>
          </div>
        </div>
      )}
    </div>
  );
}
export default memo(City);