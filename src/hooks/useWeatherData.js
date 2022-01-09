import { useState } from "react";
import { searchData, getData } from "../services/Api/index";
import useGeolocation from "./useGeolocation";

export default function useWeatherData() {
  const [loading, setloading] = useState(false);
  const { getGeolocation } = useGeolocation();
  const [error, seterror] = useState(false)
  const [weatherInfo, setWeatherInfo] = useState(null);

  const searchCity = (city=null) => {
    setloading(true);
    searchData(city)
      .then((result) => {
        setloading(false);
        setWeatherInfo(result);
      })
      .catch((err) => {
          setloading(false);
          seterror(err);
      });
  };

  const searchYourCity = () => {
    setloading(true);
    getGeolocation()
      .then((result) => {
        getData(result)
          .then((data) => {
            setloading(false);
            setWeatherInfo(data);
          })
          .catch((err) => {
            setloading(false);
            seterror(err);
          });
      })
      .catch((error) => {
          setloading(false);
          seterror(error);
      });
  };


  const resetWeatherInfo = () => {
    setWeatherInfo(null)
  };
  return { searchCity, searchYourCity, resetWeatherInfo,loading, error, weatherInfo};
}
