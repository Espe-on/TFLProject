import {Longitude} from "../../Models/Longitude";
import {Latitude} from "../../Models/Latitude";
import {TravelModes} from "../../Models/TravelModes";

interface stationLocatorProps {
    lon: Longitude;
    lat: Latitude;
    travelMode: TravelModes;
}

export function stationLocator(props: stationLocatorProps) {
    const apiUrl : string = "https://api.tfl.gov.uk/";
    const request : string = `Stoppoint?lat=${props.lat}&lon=${props.lon}&stoptypes=${props.travelMode}`;
    let reponse = "t";
    return reponse; 
}