import { Location} from '../models/location.model';

export class Weather{
    display_location: Location;
    station_id:string;
    observation_time: Date;
    weather:string;
    temperature_string:string;
    temp_f:number;
    temp_c:number;
    relative_humidity:string;
    icon:string;
    icon_url:string;
    local_time_rfc822: string;

}