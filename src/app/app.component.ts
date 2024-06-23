import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConquistasComponent } from './conquistas/conquistas.component';
import { ContatoComponent } from './contato/contato.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConquistasComponent,
    ContatoComponent,
    HabilidadesComponent,
    InicioComponent,
    ProjetosComponent,
    SobreComponent,
    HomepageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portifolio';
}
