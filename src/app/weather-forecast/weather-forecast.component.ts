import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { SimpleForecast} from '../models/simple-forecast.model';
import { Router} from '@angular/router';
import { ForecastDate } from '../models/forecast-date.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService, private router: Router, private location: Location) { }

  simpleForecast: SimpleForecast = new SimpleForecast();

  ngOnInit() {

    this.weatherService.get10DaysForecast().subscribe((resp) => {
      this.simpleForecast = resp;
    });
    
  }

  viewForecastDetail(date: ForecastDate){    
    this.router.navigate(['/forecast-detail', date.day, date.month, date.year])
  }

  goBack(){
    this.location.back();
  }
}
