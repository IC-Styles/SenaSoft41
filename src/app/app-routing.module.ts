import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ClienteComponent } from './components/usuario/cliente/cliente.component';
import { EmpresaComponent } from './components/usuario/empresa/empresa.component';
import { ProveedorComponent } from './components/usuario/proveedor/proveedor.component';

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'proveedor', component: ProveedorComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
