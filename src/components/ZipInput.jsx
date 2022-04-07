import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { dailyForecast as dailyForecastAtom, placeName as placeNameAtom, zipCode as zipCodeAtom } from '../atoms';
import { fetchWeather } from '../routes';
import { useQuery } from 'react-query';

const ZipInput = () => {
  const [dailyForecast, setDailyForecast] = useRecoilState(dailyForecastAtom);
  const [placeName, setPlaceName] = useRecoilState(placeNameAtom);
  const [zipCode, setZipcode] = useRecoilState(zipCodeAtom)

  const updateState = () => {
    setPlaceName(data.name);
    setDailyForecast(data.data.DailyForecasts);
  }

  const isProperZipcodeLength = zipCode.length === 5;
  const {data, error} = useQuery(['fetchWeather', zipCode], fetchWeather, {enabled: isProperZipcodeLength}, {retry: false}, {fetchPolicy: 'cache-first'});
  if (data) {
    updateState();
  }

  if (error) {
    return (<h1>Error: {error}</h1>)
  }

  return (
    <div className="zipInput">
      <TextField id="outlined-basic" label="Zip Code" variant="outlined" onChange={(e) => {setZipcode(e.target.value)}}/>
    </div>
  )

}

export default ZipInput;