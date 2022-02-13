import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{
  path:"landing",
  component: LandingpageComponent
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
