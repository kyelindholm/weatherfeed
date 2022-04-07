import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { dailyForecast as dailyForecastAtom } from "../atoms";
import WeatherCard from './WeatherCard';


const Feed = () => {
  const [dailyForecast] = useRecoilState(dailyForecastAtom);

  useEffect(() => {
    console.log(dailyForecast);
  }, [dailyForecast]);

  return (
    <Container style={{ display: "flex", marginTop: "10vh, 0, 10vh, 0" }}>
      <Grid container spacing={4} style={{justifyContent: "center"}}>
        {dailyForecast.map((weather) => {
          return (
            <WeatherCard weather={weather} key={weather.EpochDate}/>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Feed;
