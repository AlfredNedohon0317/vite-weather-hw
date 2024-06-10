import './App.css'
import WeatherForecast from './WeatherForecast'

const App = () => {
const weatherForecast = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
    {
      day: 'Sat',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'sunny',
      time: 'Night',
    },
    {
      day: 'Sun',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'sunny',
      time: 'Night',
    },
      
    
  ];
  
  return (
<>
    <h1>Hello world!</h1>
<WeatherForecast weather={weatherForecast[0]}/>
<WeatherForecast weather={weatherForecast[1]}/>
<WeatherForecast weather={weatherForecast[2]}/>
<WeatherForecast weather={weatherForecast[3]}/>
<WeatherForecast weather={weatherForecast[4]}/>
<WeatherForecast weather={weatherForecast[5]}/>
<WeatherForecast weather={weatherForecast[6]}/>
</>
  );
}


export default App


