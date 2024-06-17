import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-contact-form-step1',
  templateUrl: './contact-form-step1.component.html'
})
export class ContactFormStep1Component {
  formData = this.formDataSvc.formData$;

  constructor(private router: Router, private formDataSvc: FormDataService) {}

  nextStep() {
    this.router.navigate(['/step2']);
  }
}
