import axios from 'axios';
const {APIKEY} = require('../config.js');

export const fetchWeather = async (zipCode) => {
  const locationData = await axios.get(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${APIKEY}&q=${zipCode}`);
  const locationName = locationData.data[0].LocalizedName;
  const locationKey = locationData.data[0].Key;

  const responseData = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${APIKEY}`)

  const responseObject = {
    name: locationName,
    data: responseData.data
  }

  return responseObject;
}