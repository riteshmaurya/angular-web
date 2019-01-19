import { RetailLoginComponent } from './retail-login/retail-login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [

  {
    path: 'admin', 
    component: AdminComponent
  },
  {
    path: 'login', 
    component: RetailLoginComponent
  }, 
  {
    path: 'logout', 
    component: HomeComponent
  },
  {
    path: 'no-access', 
    component: NoAccessComponent
  }, 
  {
    path: 'posts', 
    component: PostComponent
  },
  {
    path: 'post/:id/:title', 
    component: PostDetailsComponent
  },
  {
    path: 'contactForm', 
    component: ContactFormComponent
  },
  {
    path: '**', 
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
