
export interface CurrentCondition {
    text: string;
    icon: string;
  }
  
  export interface WeatherData {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      condition: CurrentCondition;
      temp_c: number;
      humidity: number;
      wind_kph: number;
    };
  }
  