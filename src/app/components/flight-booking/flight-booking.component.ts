import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FlightService } from '../../service/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-booking',
  imports: [NgFor],
  templateUrl: './flight-booking.component.html',
  styleUrl: './flight-booking.component.css'
})
export class FlightBookingComponent {

  flights:any[]=[];

  constructor(private flightService:FlightService,private router:Router){
    this.flightService.getAllFlights().subscribe({
      next:(data)=>{
        this.flights=data;
      },
      error:()=>{
        
      }
    })
  }

  book(flightNumber:string){
    this.router.navigate(["/book",flightNumber]);

  }


}


// flights = [
//   { 
//     flightNumber: '1234', 
//     airline: 'Airline Name', 
//     source: 'City A', 
//     destination: 'City B' 
//   }, 
//   { flightNumber: '5678', 
//     airline: 'Another Airline', 
//     source: 'City C', 
//     destination: 'City D' 
//   } 
// ]
