import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalenderComponent } from './calender/calender.component';
import { SignInRfComponent } from './sign-in-rf/sign-in-rf.component';

const routes: Routes = [
  {
    path: 'sign-in',component: SignInComponent,
  },
  {
    path: 'sign-in-rf', component: SignInRfComponent
  },
  {
    path: 'calender', component: CalenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
