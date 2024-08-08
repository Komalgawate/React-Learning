import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";
import { useState } from 'react';

export default function Searchbox({update}) {
  let [city, setCity] = useState("");
  let[error,seterror]=useState(false);
  const Api_Url="https://api.openweathermap.org/data/2.5/weather";
  const API_key="1031e82180981b48e6b9fba105594774";

  let getweatherinfo=async()=>
  {
    try{
    let response= await fetch(`${Api_Url}?q=${city}
       &appid=${API_key}&units=metric`);

    let jsonresponse=await response.json();
    console.log(jsonresponse);
    let result={
      city:"Delhi",
      temp:jsonresponse.main.temp,
      tempMin:jsonresponse.main.temp_min,
      tempMax:jsonresponse.main.temp_max,
      humidity:jsonresponse.main.humidity,
      feelsLike:jsonresponse.main.feels_like,
      weather:jsonresponse.weather[0].description,
    };
    console.log(result);
    return result;
  }
  catch (err){
    throw err;
  }
        
};
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async(event) => {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo=await getweatherinfo();
    update(newinfo);
    }
    catch{
      seterror(true);
    }
  };


  return (
    <div className='search'>
      <h2>Search City For the Weather!</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name"
          variant="outlined" 
          required 
          value={city} 
          onChange={handleChange} 
        />
        <br/><br/> 
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error &&<h4 style={{color:"red"}}>No such place exist</h4>}
      </form>
    </div>
  );
}
