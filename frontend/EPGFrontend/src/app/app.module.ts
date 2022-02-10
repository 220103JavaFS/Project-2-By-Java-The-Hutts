import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { HttpClientModule } from '@angular/common/http';
import { EventserviceService } from './services/eventservice.service';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ActivityserviceService } from './services/activityservice.service';
import { NewcardComponent } from './components/newcard/newcard.component';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
 
]);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NewcardComponent,
    NavbarComponent,
    CardlistComponent,
    ProfileComponent,
    ButtonComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FullCalendarModule
  ],
  providers: [EventserviceService, ActivityserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
