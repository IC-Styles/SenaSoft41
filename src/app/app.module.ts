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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogeoComponent } from './components/usuario/logeo/logeo.component';
import { EncabezadoComponent } from './components/shared/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbatrComponent,
    UsuarioComponent,
    ClienteComponent,
    EmpresaComponent,
    ProveedorComponent,
    LogeoComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatSortModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
