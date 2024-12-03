import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private getAllFlightsApi = 'http://localhost:8081/api/flight/all';
  private getFlightDetailsApi = 'http://localhost:8081/api/flight/get';

  private bookFlightApi = 'http://localhost:8081/api/flight/user/add';

  constructor(private httpClient:HttpClient) {

   }


   getAllFlights():Observable<any>{
    return this.httpClient.get(this.getAllFlightsApi);

   }

   getFlightDetails(flightNumber:any):Observable<any>{
    return this .httpClient.get(this.getFlightDetailsApi+"?flightNumber="+flightNumber);
   }

   bookFlight(obj:any):Observable<any>{
    return this.httpClient.post(this.bookFlightApi,obj);
    
   }
}
