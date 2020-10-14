import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbatrComponent } from './components/shared/navbatr/navbatr.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClienteComponent } from './components/usuario/cliente/cliente.component';
import { EmpresaComponent } from './components/usuario/empresa/empresa.component';
import { ProveedorComponent } from './components/usuario/proveedor/proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbatrComponent,
    UsuarioComponent,
    ClienteComponent,
    EmpresaComponent,
    ProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
