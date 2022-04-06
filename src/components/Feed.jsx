import { useEffect } from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { dailyForecast as dailyForecastAtom } from "../atoms";

const Feed = () => {
  const [dailyForecast, setDailyForecast] = useRecoilState(dailyForecastAtom);

  useEffect(() => {
    console.log(dailyForecast);
  }, [dailyForecast]);

  return (
    <Container style={{ display: "flex", marginTop: "10vh" }}>
      <Grid container spacing={4}>
        {dailyForecast.map((weather) => {
          return (
            <Grid item key={weather.EpochDate} xs={12} sm={6} md={4} style={{ maxWidth: "15%" }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {weather.Day.IconPhrase}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Feed;
