import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Weather } from '../models/weather.model';
import  { SimpleForecast} from '../models/simple-forecast.model';
import { HourlyForecast } from '../models/hourly-forecast.model';

@Injectable()
export class WeatherService {

    apiRoot: string = 'http://api.wunderground.com/api/5b7d02f20fd26002/';

    constructor(private http: Http) {
    }

    getCurrentWeather(): Observable<Weather> {
        let apiURL = `${this.apiRoot}conditions/q/CA/San_Francisco.json`;
        return this.http.get(apiURL)
            .map(res => {
                console.log(res.json());
                return res.json().current_observation;
            });

    }

    get10DaysForecast(): Observable<SimpleForecast> {

        let apiURL = `${this.apiRoot}/forecast10day/q/CA/San_Francisco.json`;
        return this.http.get(apiURL)
            .map(res => {
                console.log(res.json());
                return res.json().forecast.simpleforecast;
            });
    }

    getHourlyForecast(day, month, year): Observable<HourlyForecast[]>{

        console.log(day + ' '+  month + ' ' + year);
        let apiURL = `${this.apiRoot}/hourly/q/CA/San_Francisco.json`;
        return this.http.get(apiURL)
            .map(res => {
                console.log(res.json().hourly_forecast[0].FCTTIME.mday);
                return res.json().hourly_forecast.filter(data => parseInt(data.FCTTIME.mday) == day 
                    && parseInt(data.FCTTIME.mon) == month 
                    && parseInt(data.FCTTIME.year) == year
                );
            });
    }


}