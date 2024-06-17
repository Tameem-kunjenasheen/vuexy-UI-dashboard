import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ContactFormComponent } from './components/ContactForm/ContactForm.component';
import { ContactFormStep1Component } from './contact-form-step1/contact-form-step1.component';
import { ContactFormStep2Component } from './contact-form-step2/contact-form-step2.component';
import { ContactFormStep3Component } from './contact-form-step3/contact-form-step3.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: '', redirectTo: '/step1', pathMatch: 'full' },
  { path: 'step1', component: ContactFormStep1Component },
  { path: 'step2', component: ContactFormStep2Component },
  { path: 'step3', component: ContactFormStep3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
