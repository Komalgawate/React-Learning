import Card from '@mui/material/Card';
import "./info.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox({info})
{
    const InitialUrl="https://images.unsplash.com/photo-1693711836001-99859bb7185a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HotUrl="https://plus.unsplash.com/premium_photo-1688431299360-fc4739a4722c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RainyUrl="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";
    const ColdUrl="https://images.unsplash.com/photo-1469793032099-27d09c984b8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div className='info'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80?
            RainyUrl:info.temp>15?
            HotUrl:ColdUrl
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       
        <p>Temperature={info.temp }&deg;c</p>
        <p>Humidity={info.humidity}</p>
        <p>tempMax={info.tempMax}</p>
        <p>tempMin={info.tempMin}</p>
    
        <p>The weather can be described as <i>{info.weather}</i> & feelsLike {info.feelsLike}&deg;c</p>
        </Typography>
    
      </CardContent>

    </Card>
        </div>
    )
}