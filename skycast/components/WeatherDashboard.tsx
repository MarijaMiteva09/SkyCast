'use client';

import React, { useState } from 'react';
import { Input, Button, Card, Spin, Row, Col } from 'antd';
import { fetchWeather } from '../lib/fetchWeather';
import { SearchOutlined } from '@ant-design/icons';
import WeatherCard from './WeatherCard';
import { WeatherData } from '../types/weather.d'; 

const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Weather Dashboard</h2>
      <Row gutter={16} justify="center">
        <Col>
          <Input
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ width: 200 }}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            loading={loading}
          >
            Search
          </Button>
        </Col>
      </Row>
      {loading && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Spin size="large" />
        </div>
      )}
      {error && <div style={{ color: 'red', marginTop: '20px' }}>{error}</div>}
      {weatherData && !loading && (
        <Card
          style={{ marginTop: '20px' }}
          title={`Weather in ${weatherData.location.name}`}
          bordered={false}
        >
          <Row gutter={16}>
            <Col span={8}>
              <WeatherCard data={weatherData} />
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};

export default WeatherDashboard;
