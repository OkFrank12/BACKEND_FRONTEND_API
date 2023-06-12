export interface iWeather {
  location: string; // location name
  id?: string;
  temperature?: string;
  pressure?: string;
  wind?: string;
  humidity?: string;
}

// http://api.weatherapi.com/v1/current.json?key=67533b357bb14164adc202331230506&q=London&aqi=yes
