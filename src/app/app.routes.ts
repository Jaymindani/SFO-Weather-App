import { Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherForecastComponent} from './weather-forecast/weather-forecast.component';
import { ForecastDetailComponent } from './forecast-detail/forecast-detail.component';

export const appRoutes: Routes = [
    { path: '', redirectTo:'current-weather', pathMatch:'full' }, //empty route
    { path: 'current-weather', component: CurrentWeatherComponent },
{ path: 'weather-forecast', component: WeatherForecastComponent },
{ path: 'forecast-detail/:day/:month/:year', component: ForecastDetailComponent },
{ path: '**', component: CurrentWeatherComponent } //wild card route
];