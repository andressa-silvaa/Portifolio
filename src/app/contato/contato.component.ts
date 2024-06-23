import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  form = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  };

  sendEmail(form: NgForm) {
    if (form.invalid) {
      // Verifica se o formulário é inválido (campos obrigatórios não preenchidos)
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    emailjs.send('service_ezcgkbj', 'template_gu7mno2', this.form, 'cJ9pGRgo9J2U4md3o')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email enviado com sucesso!');
        form.resetForm();  // Limpa o formulário
      }, (error) => {
        console.log(error.text);
        alert('Ocorreu um erro ao enviar o email.');
      });
  }
}
