import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { HourlyForecast } from '../models/hourly-forecast.model';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forecast-detail',
  templateUrl: './forecast-detail.component.html',
  styleUrls: ['./forecast-detail.component.css']
})
export class ForecastDetailComponent implements OnInit {

  day: number;
  month: number;
  year: number;

  constructor(private activatedRoute: ActivatedRoute,private weatherService: WeatherService, private location: Location) {
    this.day = this.activatedRoute.snapshot.params['day'];
    this.month = this.activatedRoute.snapshot.params['month'];
    this.year = this.activatedRoute.snapshot.params['year'];
   }

  hourlyForecasts: HourlyForecast[] = new Array<HourlyForecast>();

  ngOnInit() {

    this.weatherService.getHourlyForecast(this.day,this.month, this.year).subscribe((resp)=> {

      this.hourlyForecasts = resp;
    });
  }

  goBack(){
    this.location.back();
  }

}
