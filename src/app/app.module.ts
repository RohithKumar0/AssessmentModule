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
import { CreateComponent } from './admin/create/create.component';
import { ResultsComponent } from './user-profile/results/results.component';
import { OverviewComponent } from './user-profile/overview/overview.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { LandingComponent } from './landing/landing.component';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
import { SampleComponent } from './sample/sample.component';

const config = new  AuthServiceConfig([{
  id : GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider('686655151903-dsnobl97ube8m0q338u86f0nedulkqo7.apps.googleusercontent.com')
}])

export function provideconfig(){
  return config;
}

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
    CreateComponent,
    ResultsComponent,
    OverviewComponent,
    LandingComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    NgxGraphModule,
    SocialLoginModule,
    BrowserAnimationsModule,
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
  providers: [
    {
    provide: AuthServiceConfig, useFactory:provideconfig
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
