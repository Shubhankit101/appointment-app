import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,                 //making this component standalone
  imports: [FormsModule],           //importing FormModule for ngModel
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})

export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];
}
