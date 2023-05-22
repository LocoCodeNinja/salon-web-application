import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SalonServicesComponent } from './pages/salon-services/salon-services.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { StaffComponent } from './pages/staff/staff.component';
import { LocationComponent } from './pages/location/location.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookingDetailsComponent },
  { path: 'services', component: SalonServicesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'location', component: LocationComponent },
  { path: 'careers', component: CareersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
