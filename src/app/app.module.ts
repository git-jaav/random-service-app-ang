import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SecurityComponent } from './pages/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
