import { JwtHelperService } from '@auth0/angular-jwt';
import { CourseService } from './services/course.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RetailLoginComponent } from './retail-login/retail-login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { fakeBackendProvider } from './FakeBackendInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SingupFormComponent,
    PostComponent,
    NavbarComponent,
    PostDetailsComponent,
    RetailLoginComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    PostService,
    fakeBackendProvider,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
