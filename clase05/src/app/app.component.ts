import { Component } from '@angular/core';
import { Usuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase05';

  modalVisible = false;

  /* creamos lista usuarios para enviar a componente hijo */
  usuariosAprobados: Usuario[] = [
    {
      firstName: 'Ana',
      lastName: 'Gonzalez'
    },
    {
      firstName: 'Jacke',
      lastName: 'Williams'
    },
  ]

  usuariosDesaprobados: Usuario[] = [
    {
      firstName: 'Juana',
      lastName: 'Griza'
    },
    {
      firstName: 'Machura',
      lastName: 'Jackson'
    },
  ]

  deleteUser(index: number, arrayName: 'usuariosAprobados' | 'usuariosDesaprobados'): void {
    
    if(arrayName === 'usuariosAprobados'){
      console.log('Eliminaremos usuario ' + index);
      this.usuariosAprobados = this.usuariosAprobados.filter(
        (el, i) => i !== index
      )
    }

    if(arrayName === 'usuariosDesaprobados'){
      console.log('Eliminaremos usuario ' + index);
      this.usuariosDesaprobados = this.usuariosDesaprobados.filter(
        (el, i) => i !== index
      )
    }


  }

}
