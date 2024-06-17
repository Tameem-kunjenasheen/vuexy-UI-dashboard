import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-contact-form-step2',
  templateUrl: './contact-form-step2.component.html',
  styleUrls: ['./contact-form-step2.component.css']
})
export class ContactFormStep2Component {
  formData = {}; // Initialize formData object for this step

  constructor(private router: Router, private formDataSvc: FormDataService) {
    // Retrieve previously saved form data (if any) from the service
    this.formData = this.formDataSvc.getCurrentFormData();
  }

  nextStep() {
    // Save current step's form data to the service
    this.formDataSvc.updateFormData(this.formData);
    // Navigate to the next step
    this.router.navigate(['/step3']);
  }
}
