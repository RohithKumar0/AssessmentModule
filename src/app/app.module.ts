import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatesComponent } from './admin/candidates/candidates.component';
import { AgGridModule } from 'ag-grid-angular';
import { JwtModule } from '@auth0/angular-jwt';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { AssignmentsComponent } from './admin/assignments/assignments.component';
import { MainAssignmentComponent } from './main-assignment/main-assignment.component';
import { AboutAssignmentComponent } from './main-assignment/about-assignment/about-assignment.component';
import { QuestionsComponent } from './main-assignment/questions/questions.component';
import { CandidatePerformanceComponent } from './main-assignment/candidate-performance/candidate-performance.component';
import { TakeTestComponent } from './take-test/take-test.component';
import { MyAssignmentsComponent } from './user-profile/my-assignments/my-assignments.component';
import { AddQuestionComponent } from './main-assignment/add-question/add-question.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'ng4-social-login';
import { CreateComponent } from './admin/create/create.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SearchResultsComponent,
    AdminComponent,
    CandidatesComponent,
    UserProfileComponent,
    NewRegistrationComponent,
    AssignmentsComponent,
    MainAssignmentComponent,
    AboutAssignmentComponent,
    QuestionsComponent,
    CandidatePerformanceComponent,
    TakeTestComponent,
    MyAssignmentsComponent,
    AddQuestionComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return localStorage.getItem("token");
        }
      }
    }),
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
