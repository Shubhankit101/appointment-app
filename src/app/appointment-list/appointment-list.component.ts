import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  standalone: true, //making this component standalone
  imports: [FormsModule, CommonModule], //importing FormModule for ngModel
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  }

  toggleTheme():void{
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark-theme' : '');
  }

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
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      //Save the data in local Storage
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }
  // Deletes the object with the index from the appointment list, which will automatically reflect in our html.
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
