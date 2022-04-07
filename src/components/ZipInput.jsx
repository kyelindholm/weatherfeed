import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { dailyForecast as dailyForecastAtom, placeName as placeNameAtom, zipCode as zipCodeAtom } from '../atoms';
import { fetchWeather } from '../routes';

const ZipInput = () => {
  const [dailyForecast, setDailyForecast] = useRecoilState(dailyForecastAtom);
  const [placeName, setPlaceName] = useRecoilState(placeNameAtom);
  const [zipCode, setZipcode] = useRecoilState(zipCodeAtom)

  useEffect(() => {
    const handleChangeZipcode = async(zipCode) => {
      const newForecast = await fetchWeather(zipCode);
      setDailyForecast(newForecast.data.DailyForecasts);
      setPlaceName(newForecast.name);
    }
    if (zipCode.length === 5) {
      handleChangeZipcode(zipCode);
    }
  }, [zipCode, setDailyForecast, setPlaceName])

  return (
    <div className="zipInput">
      <TextField id="outlined-basic" label="Zip Code" variant="outlined" onChange={(e) => {setZipcode(e.target.value)}}/>
    </div>
  )

}

export default ZipInput;