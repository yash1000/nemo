import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { GetintouchComponent } from './pages/getintouch/getintouch.component';
import { PartnersComponent } from './pages/partners/partners.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:  HomeComponent},
  {path: 'story', component:  OurstoryComponent},
  {path: 'git', component:  GetintouchComponent},
  {path: 'partner', component:  PartnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
