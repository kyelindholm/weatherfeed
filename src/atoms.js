import { atom } from 'recoil';

export const dailyForecast = atom({
  key: "dailyForecast",
  default: []
});

export const placeName = atom({
  key: "name",
  default: ''
});