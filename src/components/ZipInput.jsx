import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { dailyForecast as dailyForecastAtom, placeName as placeNameAtom } from '../atoms';
import { fetchWeather } from '../routes';

const ZipInput = () => {
  const [dailyForecast, setDailyForecast] = useRecoilState(dailyForecastAtom);
  const [placeName, setPlaceName] = useRecoilState(placeNameAtom);

  const handleChangeZipcode = async (zipInput) => {
    if (zipInput.length === 5) {
      const newForecast = await fetchWeather(zipInput);
      setDailyForecast(newForecast.data.DailyForecasts);
      setPlaceName(newForecast.name);
    }
  }

  return (
    <div className="zipInput">
      <TextField id="outlined-basic" label="Zip Code" variant="outlined" onChange={(e) => {handleChangeZipcode(e.target.value)}}/>
    </div>
  )

}

export default ZipInput;