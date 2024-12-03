import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../../service/flight.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [FormsModule,NgIf],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  flightNumber: any; 
  name: any; 
  contact: any; 
  dateOfJourney: any; 
  numberOfPassengers: any; 
  msg: string|undefined;
  user:any[]=[];
  flight:any[]=[];
  isEnabled:boolean=false;


  constructor(private flightService:FlightService,private actRoute: ActivatedRoute){
    this.actRoute.paramMap.subscribe(p=>{
      this.flightNumber = p.get('flightNumber');
      // console.log(this.flightNumber);
      
    })
    
  }
  ngOnInit(): void {
    this.flightService.getFlightDetails(this.flightNumber).subscribe({
      next:(data)=>{
        this.flight = data;
        console.log(this.flight);
        
      },
      error:()=>{}
    })
  }

  onSubmit(){
    let obj = {
      flight:this.flight,
      user:{
        name:this.name,
        contact:this.contact
      },
      dateOfjourney:this.dateOfJourney,
      numberOfPassengers:this.numberOfPassengers
    }

    this.flightService.bookFlight(obj).subscribe({
      next:(data)=>{
        this.msg="Successs";
        console.log(data);
        
      },
      error:()=>{}
    })

  }

  verify(){
    if(this.name==undefined){
      return true
    }
    return false;
  }

}
