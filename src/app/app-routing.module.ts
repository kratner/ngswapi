import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonSearchComponent } from './person-search/person-search.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
const routes: Routes = [
  { path: '', component: PersonSearchComponent },
  { path: 'people', component: PersonSearchComponent },
  { path: 'planets/:id', component: PlanetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
