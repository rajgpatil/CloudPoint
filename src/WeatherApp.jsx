import {useState} from "react"

import SubmitBox from "./SubmitBox"
import InfoBox from "./InfoBox"


export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Mumbai",
        feels_like: 31.5,
        humidity: 52,
        temp: 30.08,
        temp_max: 30.08,
        temp_min: 30.08,
        weather: "broken clouds"
    });

    function newInfo(result){
        setWeatherInfo(result);
    }

    return(
        <div>
            <SubmitBox newInfo={newInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}