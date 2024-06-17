import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-contact-form-step1',
  templateUrl: './contact-form-step1.component.html',
  styleUrls: ['./contact-form-step1.component.css']
})
export class ContactFormStep1Component {
  formData = {}; // Initialize formData object for this step

  constructor(private router: Router, private formDataSvc: FormDataService) {}

  nextStep() {
    // Save current step's form data to the service
    this.formDataSvc.updateFormData(this.formData);
    // Navigate to the next step
    this.router.navigate(['/step2']);
  }
}
