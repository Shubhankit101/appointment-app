import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-appointment-list',
  standalone: true, //making this component standalone
  imports: [FormsModule, CommonModule], //importing FormModule for ngModel
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };

      // pushing the newly created Appointment object into Apppointmens array
      this.appointments.push(newAppointment);

      // Clearing out the data from the placeholder after is has been added.
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      alert(this.appointments.length);
    }
    
  }

  deleteAppointment(index: number){
    this.appointments.splice(index,1);
}
