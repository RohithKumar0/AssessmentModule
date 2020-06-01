import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatesComponent } from './admin/candidates/candidates.component';
import { AuthGaurdService as adminAuth} from './auth-gaurd.service';


const routes: Routes = [

  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"search", component:SearchComponent},
  {path:"admin", component:AdminComponent, canActivate:[adminAuth]},
  {path:"candidates", component:CandidatesComponent, canActivate:[adminAuth]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
