import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  // Define properties to hold form data using BehaviorSubject for state management
  private formDataSubject = new BehaviorSubject<any>({});
  formData$ = this.formDataSubject.asObservable();

  constructor() {}

  // Method to update form data
  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }

  // Method to get current form data
  getCurrentFormData() {
    return this.formDataSubject.value;
  }

  // Method to clear form data
  clearFormData() {
    this.formDataSubject.next({});
  }
}
