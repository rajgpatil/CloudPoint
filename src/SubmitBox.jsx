import {useState} from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SubmitBox.css"

export default function SubmitBox({newInfo}) {
    let [city,setCity] = useState("");
    let [err,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const KEY = "d89ba88c7adaf40deebc50364e7110bc";

    let weatherInfo = async()=>{
        try{
            let weather = await fetch(`${API_URL}?q=${city}&appid=${KEY}&units=metric`);
            let jsonResponse = await weather.json();
            // console.log(jsonResponse);
                let result = {
                city:city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
                }
        // console.log(result);
            setError(false);
            return result;
        }catch(err){
            throw err;
        }
    }

    function handelChange(event){
        setCity(event.target.value);
    }

    async function handelSubmit(event){
        try{
            event.preventDefault();
            // console.log(city);
            let result = await weatherInfo();
            newInfo(result);
            setCity("");
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className='submitbox'>
            <form onSubmit={handelSubmit}>
                <h3>Search Weather in Any Location</h3>
                <TextField
                    label="City"
                    id="outlined-size-small"
                    size="small"
                    value={city}
                    onChange={handelChange}
                />
                <p style={{color: "red"}}>{(err) ? "Can not have a Weather Data of this Location" : null}</p>
                <br></br> <br></br>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}