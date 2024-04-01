import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { StudentsComponent } from './componentes/students/students.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
