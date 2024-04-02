import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Usuario } from '../../models';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements AfterViewInit, OnInit {

  @ViewChild('myList')
  myList?: ElementRef

  constructor() {
    console.log('constructor', this.myList)
  }
  ngOnInit(): void {
    console.log('on init', this.myList)
  }


  ngAfterViewInit(): void {
    console.log('after view init', this.myList)
  }

  /* -------------- */
  @Input()
  usuarios: Usuario[] = []
  /* -------------- */
  @Output()
  deleteUser = new EventEmitter()

}
