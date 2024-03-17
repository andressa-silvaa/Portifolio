import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ConquistasComponent } from './conquistas/conquistas.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "habilidades",
    component: HabilidadesComponent
  },
  {
    path: "projetos",
    component: ProjetosComponent
  },
  {
    path: "conquistas",
    component: ConquistasComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  }
];
