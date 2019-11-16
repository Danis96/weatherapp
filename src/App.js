import React, { Component } from 'react';
import { async } from 'q';
import Weather from './components/Weather';
import 'weather-icons/css/weather-icons.css';
import Form from './components/form';
import Header from './components/Header';

const API_KEY = 'eba580c0b93bbb85939a4e6ca7eabda9';

class App extends Component {
  constructor(){
    super();
    this.state = {
       city: undefined,
       country: undefined,
       temp: undefined,
       min_temp: undefined,
       max_temp: undefined,
       description:undefined,
       icon: undefined,
       humidity: undefined,
       error: false
   }

   this.weatherIcon = {
     Thunderstorm: 'wi-night-thunderstorm',
     Drizzle: 'wi-cloudy-windy',
     Rain: 'wi-rain',
     Snow: 'wi-snow',
     Atmosphere: 'wi-fog',
     Clear: 'wi-day-sunny',
     Clouds: 'wi-cloudy'
   }

  }

  getWeatherIcon = (icon, rangeid) => { 
      switch(true)
      {
        case rangeid >= 200 && rangeid <= 232:
           this.setState({ 
             icon: this.weatherIcon.Thunderstorm
            });
        break;
        case rangeid >= 300 && rangeid <= 321:
           this.setState({ 
             icon: this.weatherIcon.Drizzle
            });
        break;
        case rangeid >= 500 && rangeid <= 531:
           this.setState({ 
             icon: this.weatherIcon.Rain
            });
        break;
        case rangeid >= 600 && rangeid <= 622:
           this.setState({ 
             icon: this.weatherIcon.Snow
            });
        break;
        case rangeid >= 701 && rangeid <= 781:
           this.setState({ 
             icon: this.weatherIcon.Atmosphere
            });
        break;
        case rangeid === 800:
           this.setState({ 
             icon: this.weatherIcon.Clear
            });
        break;
        case rangeid >= 810 && rangeid <= 804:
           this.setState({ 
             icon: this.weatherIcon.Clouds
            });
        break;
        default: 
        return null;

      }
  }

  getWeather = async(e) => {

      e.preventDefault();
      // get inputs
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      if(city, country)
      {
        const API_call =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const response = await API_call.json();
         console.log(response);

    this.setState({ 
        city: `${response.name}`,
        country: `${response.sys.country}`,
        temp: this.calculateCelsius(response.main.temp),
        icon: this.weatherIcon.Thunderstorm,
        min_temp: this.calculateCelsius(response.main.temp_min),
        max_temp: this.calculateCelsius(response.main.temp_max),
        description: response.weather[0].description,
        humidity: response.main.humidity,
        error: false
      });

      this.getWeatherIcon(this.weatherIcon, response.weather[0].id);

      } else {
        this.setState({ 
          error:true
          });
      }
    
      

   }

   calculateCelsius = (temp) => {
     let cel = Math.floor(temp - 273.15);
     return cel;
   } 


  render() {  
    const {city, country, temp, icon, min_temp, max_temp, description, humidity, error} = this.state;
    return ( 
      <div className="App">
         <div className='container'>
             <Header parag='Developed by Danis Preldzic' />
             <Form  loadWeather={this.getWeather}
                    error={error}
             />
             <Weather city={city} 
                      country={country}
                      temp={temp}
                      weatherIcon={icon}
                      minTemp={min_temp}
                      maxTemp={max_temp}
                      desc={description}
                      humidity={humidity}
             />
         </div>
      </div>
     );
  }
}
 
export default App;