'use client';
import React from 'react';
import WeatherDashboard from '../../components/WeatherDashboard';


const Home: React.FC = () => {
  return (
    <div>
      <h1>SkyCast - Your Weather Dashboard</h1>
      <WeatherDashboard/>
    </div>
  );
};

export default Home;
