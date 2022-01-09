export default function useGeolocation() {
  const getGeolocation = () => {
    return new Promise(function (resolve, reject) {
      var options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      };

      function onSucces(position) {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;
        resolve({
          latitud,
          longitud,
        });
      }
      function onError(error) {
        reject(error);
      }

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(onSucces, onError, options);
      }
    });
  };
  return { getGeolocation };
}
