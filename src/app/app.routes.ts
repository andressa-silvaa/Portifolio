import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ConquistasComponent } from './conquistas/conquistas.component';
import { ContatoComponent } from './contato/contato.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'conquistas', component: ConquistasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'home', component: HomepageComponent }
];
