import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { VinosComponent } from './pages/vinos/vinos';
import { GaleriaComponent } from './pages/galeria/galeria';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vinos', component: VinosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
