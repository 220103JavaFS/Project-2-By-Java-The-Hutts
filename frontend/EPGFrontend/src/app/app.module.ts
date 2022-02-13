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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { ActivityserviceService } from './services/activityservice.service';
import { NewcardComponent } from './components/newcard/newcard.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
 ]);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CardlistComponent,
    ProfileComponent,
    ButtonComponent,
    CalendarComponent,
    NewcardComponent,
    RegisterComponent,
    LandingpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FullCalendarModule
  ],
  providers: [EventserviceService, ActivityserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
