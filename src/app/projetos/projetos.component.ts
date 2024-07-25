import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var UIkit: any;

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {
  public linkRep = "";
  public linkApp = "";
  public texto = "";

  openModal(idModal : string, linkRep : string, linkApp : string , idTexto : string) {
    this.linkApp = linkApp;
    this.linkRep = linkRep
    const element = document.getElementById(idTexto);
    if (element) {
      this.texto = element.innerText;
    }
    UIkit.modal(idModal).show();
  }
}
