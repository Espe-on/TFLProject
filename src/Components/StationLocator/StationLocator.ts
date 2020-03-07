import {Longitude} from "../../Models/Longitude";
import {Latitude} from "../../Models/Latitude";
import {TravelModes} from "../../Models/TravelModes";
import {Url} from "../../Models/Url";

interface stationLocatorProps {
    lon: Longitude;
    lat: Latitude;
    travelMode: TravelModes; 
}

export async function stationLocator(props: stationLocatorProps) {
    const api : Url = "https://api.tfl.gov.uk/";
    const request : string = `Stoppoint?lat=${props.lat}&lon=${props.lon}&stoptypes=${props.travelMode}`;
    const apiRequest : Url = `${api}${request}`;
    const apiResponse = await fetch (apiRequest);
    return await apiResponse.json();
}