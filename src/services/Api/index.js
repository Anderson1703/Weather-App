
const key = 'd73c13dbc12a16d6298addced74b083f';
export const searchData = (city='') => {
    return new Promise ((resolve, reject)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
    .then(json => {
        resolve(json);
    }).catch(err=>{
        reject(err);
    })
    })
}

export const getData = (location) => {
    return new Promise ((resolve, reject)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitud}&lon=${location.longitud}&appid=${key}`)
    .then(response => response.json())
    .then(json => {
        resolve(json);
    })
    .catch(err=>{
        reject(err);
    })
    })
}