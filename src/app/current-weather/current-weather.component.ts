import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService, private router: Router) { }

  weatherData: Weather = new Weather();

  ngOnInit() {
    let data = this.weatherService.getCurrentWeather().subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }

  goToForecast(){
    this.router.navigate(['weather-forecast']);
  }
}
