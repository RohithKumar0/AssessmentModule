import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [

  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"search", component:SearchComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
