import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-contact-form-step3',
  templateUrl: './contact-form-step3.component.html'
})
export class ContactFormStep3Component {
  formData = {};

  constructor(private router: Router, private formDataSvc: FormDataService) {
    // Retrieve previously saved form data (if any) from the service
    this.formData = this.formDataSvc.getCurrentFormData();
  }

  submitForm() {

    console.log('Form submitted:', this.formData);
    // Optionally, clear form data after submission
    this.formDataSvc.clearFormData();
    // Navigate to success page or home page
    this.router.navigate(['/']);
  }
}
