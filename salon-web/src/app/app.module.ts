import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SalonServicesComponent } from './pages/salon-services/salon-services.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ChatComponent } from './components/chat/chat.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { LocationComponent } from './pages/location/location.component';
import { StaffComponent } from './pages/staff/staff.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AboutComponent } from './pages/about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    GalleryComponent,
    SalonServicesComponent,
    BookingDetailsComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    SlideshowComponent,
    LocationComponent,
    StaffComponent,
    CareersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
