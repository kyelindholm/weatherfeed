import { Grid, Card, CardContent, Typography, CardMedia} from "@mui/material";
import moment from 'moment';
import heavyraincon from '../weather_images/heavyraincon.png';
import lightraincon from '../weather_images/lightraincon.png';
import snowcon from '../weather_images/snowcon.png';
import suncon from '../weather_images/suncon.png';
import cloudycon from '../weather_images/cloudycon.png';



const WeatherCard = ({weather}) => {
  const weatherDate = moment().format(weather.Date.slice(0, weather.Date.indexOf('T')));


  let currentWeatherIcon = '';
  if (weather.Day.HasPrecipitation === false) {
    if (weather.Day.IconPhrase.toLowerCase().includes('cloud')) {
      currentWeatherIcon = cloudycon;
    } else {
      currentWeatherIcon = suncon;
    }
  } else if (weather.Day.PrecipitationType !== 'Rain') {
    currentWeatherIcon = snowcon;
  } else if (weather.Day.PrecipitationIntensity === 'Heavy') {
    currentWeatherIcon = heavyraincon;
  } else {
    currentWeatherIcon = lightraincon;
  }
  return (
    <Grid item key={weather.EpochDate} xs={12} sm={6} md={4} style={{ maxWidth: "15%" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: 1
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <CardMedia
                    component='img'
                    alt={weather.Day.IconPhrase}
                    image={currentWeatherIcon}
                  />
                  <Typography align='center'>
                    High: {weather.Temperature.Maximum.Value}°
                  </Typography>
                  <Typography align='center'>
                    Low: {weather.Temperature.Minimum.Value}°
                  </Typography>
                </CardContent>
                <Typography align='center'>
                    {weatherDate}
                  </Typography>
              </Card>
            </Grid>
  )
};

export default WeatherCard;