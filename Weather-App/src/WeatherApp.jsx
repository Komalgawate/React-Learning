import { useState } from "react"
import Infobox from "./Infobox"
import Searchbox from "./Searchbox"
export default function WeatherApp()
{
    const[weatherinfo,setweatherinfo]=useState({
    City:"Delhi",
    feelsLike: 31.32,
    humidity: 94,
    temp: 27.05,
    tempMax: 27.05,
    tempMin: 27.05,
    weather: "thunderstorm"
    });

    let updateinfo=(newinfo)=>
    {
      setweatherinfo(newinfo);
    };
    return(
        <div>
            <h1 style={{color:"violet"}}>Weather App</h1>
             <Searchbox update={updateinfo}/>
             <Infobox info={weatherinfo}/>
        </div>
    )
}