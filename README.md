# VuexyUIDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Overview of a project that includes a multi-step contact form wizard, a user list page, and navigation functionality. This project is built using Angular and showcases how to manage and navigate between different views while preserving form state across steps.

################################   Project Overview   ################################


Project Name: Angular Multi-Step Form and Navigation Application

 

Multi-step form wizard for collecting user information.
User list page to display a list of users.
Navigation between different components (pages) of the application.
Maintaining state across multiple form steps using a service.


Key Features
Multi-Step Contact Form Wizard:

A form split into three steps, where each step collects different parts of the user's information.
Utilizes a service (FormDataService) to store and retrieve form data between steps.
Ensures data persistence and smooth transition between steps.
User List Page:

Displays a list of users in a tabular format.
Can include functionalities like sorting, filtering, and pagination.
Fetches data from a mock or real API.
Navigation:

Side navigation menu to navigate between different pages such as the User List, Locations, and Contact Form.
Each menu item links to a corresponding route in the Angular application.
Provides visual feedback on active navigation item.

Components and Services
UserListComponent:

Displays a list of users.
Template includes a table structure with user data.
LocationsComponent:

Placeholder component for displaying locations (could be extended to show map or list of locations).
ContactFormStep1Component, ContactFormStep2Component, ContactFormStep3Component:

Represents each step of the multi-step form.
Each component collects part of the form data and uses FormDataService to save and retrieve data.
FormDataService:

Service to store form data and ensure persistence across form steps.
Uses BehaviorSubject for reactive state management.
How to Use the Project
Set Up:

Clone the repository.
Run npm install to install dependencies.
Development Server:

Run ng serve to start the development server.
Navigate to http://localhost:4200/ to view the application.
Navigation:

Use the side navigation menu to switch between the User List, Locations, and Contact Form pages.
Fill out the multi-step contact form to see how data is preserved across steps using FormDataService.
Customization:

Modify components, routes, and services as per your requirements.
Extend functionality, add more components, and integrate with real APIs as needed.
