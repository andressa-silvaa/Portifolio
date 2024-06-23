import { Component} from '@angular/core';
import { ConquistasComponent } from '../conquistas/conquistas.component';
import { ContatoComponent } from '../contato/contato.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { SobreComponent } from '../sobre/sobre.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ConquistasComponent,
    ContatoComponent,
    HabilidadesComponent,
    InicioComponent,
    ProjetosComponent,
    SobreComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}

