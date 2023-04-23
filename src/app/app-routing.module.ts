import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  {
    path: 'sign-in',component: SignInComponent,
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
