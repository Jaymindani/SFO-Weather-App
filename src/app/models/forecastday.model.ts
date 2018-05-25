
import { ForecastDate } from './forecast-date.model';

export class ForecastDay {
    date: ForecastDate;
    period: number;
    high: {};
    low: {};
    conditions: string;
    icon: string;
    icon_url: string;
    avehumidity: number;
    maxhumidity: number;
    minhumidity: number;
}