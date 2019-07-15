import { BankviewComponent } from './bankview/bankview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowfavouritesComponent } from './showfavourites/showfavourites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'showfavourites', component: ShowfavouritesComponent },
  { path: 'bank/:source/:id', component: BankviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
