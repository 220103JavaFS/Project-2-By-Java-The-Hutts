import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardlistComponent } from './components/cardlist/cardlist.component';

const routes: Routes = [{
  path:"MyEvents",
  component: CardlistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
