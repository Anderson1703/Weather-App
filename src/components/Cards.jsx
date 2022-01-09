import React from 'react'
import "../index.css";
export default function Cards({weatherData}) {
    return (
        <div className='contCards'>
             <div className="card cardVientos" style={{background:"yellow"}}>
            <h3>Vientos</h3>
            <p>
              Rafagas: {weatherData.wind.gust} <br />
              Velocidad: {weatherData.wind.speed}
            </p>
            </div>
            <div className="card cardUbicacion" style={{background:"green"}}>
            <h3>Ubicacion</h3>
            <p>
              Latitud: {weatherData.coord.lat} <br />
              Longitud: {weatherData.coord.lon}
            </p>
            </div>
            <div className="card cardVientos" style={{background:"red"}}>
            <h3>Detalles</h3>
            <p>
              Humedad: {weatherData.main.humidity}% <br />
              Nubes: {weatherData.clouds.all}% <br />
              Visibilidad: {weatherData.visibility}Km
            </p>
            </div>
        </div>
    )
}
