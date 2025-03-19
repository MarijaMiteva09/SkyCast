'use client'

import React from 'react';
import { Card } from 'antd';

interface WeatherCardProps {
  data: any; 
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <Card
      style={{ width: '100%' }}
      cover={<img alt="weather-icon" src={data.current.condition.icon} />}
    >
      <h3>{data.current.condition.text}</h3>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind Speed: {data.current.wind_kph} km/h</p>
    </Card>
  );
};

export default WeatherCard;
