import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css"

//icons
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const RAIN_URL = "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SUMMER_URL = "https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const WINTER_URL = "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return(
        <div className="infobox">
            <h3>Weather - {info.weather}</h3>
            <div className="card">
                <Card sx={{ maxWidth: 500}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="175"
                        image={(info.humidity >= 80) ? RAIN_URL : (info.temp > 20) ? SUMMER_URL : WINTER_URL}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {(info.humidity >= 80) ? <ThunderstormIcon/> : (info.temp > 20) ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                                <div>
                                    <b>Temperature =</b> {info.temp}&deg;C
                                </div>
                                <div>
                                    <b>Humidity =</b> {info.humidity}&deg;C
                                </div>
                                <div>
                                    <b>Min Temp =</b> {info.temp_min}&deg;C
                                </div>
                                <div>
                                    <b>Max Temp =</b> {info.temp_max}&deg;C
                                </div>
                                <div>
                                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
                                </div>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}