export interface BlogData {
  id: string;
  title: string;
  content: string;
  image: string;
  updatedAt: string;
}

export interface AQIData {
  id: string;
  country: string;
  state: string;
  lga: string;
  city: string;
  AQI: string;
  pm_1: string;
  pm_2: string;
  pm10: string;
  temp: string;
  humidity: string;
  heat: string;
  voltage: string;
  date: string;
}

export interface AMD_type {
  status: string;
  statusCode: number;
  message: string;
  data: [
    {
      id: string;
      device_uid: string;
      serial_number: string;
      location: string;
      lat: number;
      lon: number;
      createdAt: string;
      updatedAt: string;
      airReading: [
        {
          id: string;
          aqi: number;
          humidity: number;
          pm01_0: number;
          pm02_5: number;
          pm10_0: number;
          pressure: number;
          temperature: number;
          voltage: number;
          device_uid: string;
          captured: number;
          createdAt: string;
          updatedAt: string;
          airQualityReadingId: string;
        }
      ];
      histories: [
        {
          id: string;
          date: string;
          aqi: number;
          pm1_0: number;
          pm2_5: number;
          pm10_0: number;
          aiReadingId: string;
        }
      ];
    }
  ]
}
export interface AMD_type_v2 {
  id: string;
  device_uid: string;
  serial_number: string;
  location: string;
  lat: number;
  lon: number;
  createdAt: string;
  updatedAt: string;
  airReading: [
    {
      id: string;
      aqi: number;
      humidity: number;
      pm01_0: number;
      pm02_5: number;
      pm10_0: number;
      pressure: number;
      temperature: number;
      voltage: number;
      device_uid: string;
      captured: number;
      createdAt: string;
      updatedAt: string;
      airQualityReadingId: string;
    }
  ];
  histories: [
    {
      id: string;
      date: string;
      aqi: number;
      pm1_0: number;
      pm2_5: number;
      pm10_0: number;
      aiReadingId: string;
    }
  ];
}
