import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatesComponent } from './admin/candidates/candidates.component';
import { AuthGaurdService as adminAuth} from './auth-gaurd.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { AssignmentsComponent } from './admin/assignments/assignments.component';
import { MainAssignmentComponent } from './main-assignment/main-assignment.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { LandingComponent } from './landing/landing.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {path:"sample", component:SampleComponent},

  {path:"", component:LandingComponent},
  {path:"login", component:LoginComponent},
  {path:"search", component:SearchComponent},
  {path:"admin", component:AdminComponent, canActivate:[adminAuth]},
  {path:"candidates", component:CandidatesComponent, canActivate:[adminAuth]},
  {path: "profile/:id", component:UserProfileComponent},
  {path:"new", component:NewRegistrationComponent},
  {path:"assignments", component:AssignmentsComponent},
  {path:"assignmentProfile/:id", component: MainAssignmentComponent, canActivate:[adminAuth]},
  {path:"takeTest/:id", component:TakeTestComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
