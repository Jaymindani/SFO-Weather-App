import { FCTTIME} from './FCTTIME.model';

export class HourlyForecast{
    FCTTIME: FCTTIME;
    temp:{};
    dewpoint:{};
    condition:string;
    icon_url:string;
    humidity:string;
}