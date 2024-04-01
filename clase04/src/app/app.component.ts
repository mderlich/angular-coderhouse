import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase04';
  /* -------------------- */

  alumnos = [
    { apellido: "González", nombre: "María", edad: 20, aprobado: true, img: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-373-456325.png" },
    { apellido: "Rodríguez", nombre: "Juan", edad: 22, aprobado: false, img: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png" },
    { apellido: "Martínez", nombre: "Ana", edad: 21, aprobado: true, img: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-369-456321.png" },
    { apellido: "López", nombre: "Pedro", edad: 19, aprobado: true, img: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-380-456332.png" },
    { apellido: "Sánchez", nombre: "Laura", edad: 23, aprobado: false, img: "https://cdn.iconscout.com/icon/free/png-512/free-avatar-378-456330.png" }
  ]

  /* -------------------- */
  hasError = true;

  alternarError() {
    this.hasError = !this.hasError;
  }
  /* -------------------- */
  /* Ciclos */
  students = ['Ana', 'Juana', 'Diana']
  /* -------------------- */


  /* Condicionales */
  mostrarListado = false;
  /* -------------------- */

  /* Switch */
  status: 'en-camino' | 'entregado' | 'en-reparacion' = 'en-reparacion'
  /* -------------------- */

  /* Pipes*/
  fecha = new Date(2024, 3, 30)
}
