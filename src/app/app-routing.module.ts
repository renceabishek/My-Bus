import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeatsComponent } from './seats/seats.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
      path: '', component: HomeComponent 
    },
    {
      path:'search',component:SearchComponent
    },
    {
      path:'seats',component:SeatsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
