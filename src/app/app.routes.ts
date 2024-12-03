import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
    {
        path:'',component:DashboardComponent,children:[
            {
                path:'',component:FlightBookingComponent
            },
            
        ]
    },
    {
        path:'book/:flightNumber',component:BookingComponent
    }
];
