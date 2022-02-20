import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{
  path:"",
  component: LandingpageComponent,
},
{
  path:"login",
  component: LoginComponent
},
{
  path:"MyEvents",
  component: CardlistComponent
}, {
  path:"profile",
  component: ProfileComponent
}, {
  path:"calendar",
  component: CalendarComponent
}, {
  path:"register",
  component: RegisterComponent
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
