import { takeWhile } from 'rxjs';
import { Escolaridade } from './../../../../models/escolaridade.enum';
import { User } from './../../../../models/user.model';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  mensagem: string = '';
  user: User = new User();
  listening = true;

  escolaridades = [
    { classificacao: 'Infantil', valor: Escolaridade.Infantil },
    { classificacao: 'Fundamental', valor: Escolaridade.Fundamental },
    { classificacao: 'Médio', valor: Escolaridade.Medio },
    { classificacao: 'Superior', valor: Escolaridade.Superior }
  ]

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.listening = false;
  }

  formUsuario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', [Validators.required]),
    escolaridade: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formUsuario.controls;
  }

  validaData: any = null;

  dateValidator(dataNascimento: Date): void {

    const dataAtual = new Date();
    const dataInput = new Date(dataNascimento);

    if (dataInput.getDay() === NaN || dataInput.getMonth() === NaN || dataInput.getFullYear() === NaN) {
      this.validaData = null
    }

    if (dataInput.getDay() !== NaN && dataInput.getMonth() !== NaN && dataInput.getFullYear() !== NaN) {
      if (dataAtual > dataInput) {
        this.validaData = false
      }
      else {
        this.validaData = true;
      }
    }

    console.log(dataInput.getDate())
  }

  onSubmit(): void {

    this.user = this.formUsuario.value;

    this.userService.postUser(this.user)
      .pipe(takeWhile(() => this.listening))
      .subscribe(
        res => {
          this.formUsuario.reset();
          this.router.navigate(['/user']);
        }
      )
  }

}
